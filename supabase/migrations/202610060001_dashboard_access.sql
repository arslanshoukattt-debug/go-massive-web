-- Run once in the Go Massive Supabase project's SQL Editor.
begin;

create table if not exists public.dashboard_members (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('owner', 'staff')),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.dashboard_permissions (
  user_id uuid not null references public.dashboard_members(user_id) on delete cascade,
  feature text not null check (feature in ('crm', 'analytics', 'payments', 'reviews', 'content', 'site_health')),
  access_level text not null check (access_level in ('view', 'edit')),
  primary key (user_id, feature)
);

alter table public.dashboard_members enable row level security;
alter table public.dashboard_permissions enable row level security;

-- Fail rather than accidentally assigning ownership in the wrong project.
do $$
begin
  if not exists (
    select 1 from auth.users
    where id = 'a64f1b13-ffc8-4210-9923-63bf41f49b5d'
      and lower(email) = 'arslan@go-massive.com'
  ) then
    raise exception 'Expected Go Massive owner account not found. Check the project and user UID.';
  end if;
end $$;

insert into public.dashboard_members (user_id, role, active)
values ('a64f1b13-ffc8-4210-9923-63bf41f49b5d', 'owner', true)
on conflict (user_id) do update set role = 'owner', active = true;

create or replace function public.dashboard_is_owner()
returns boolean language sql stable security definer set search_path = ''
as $$
  select exists (
    select 1 from public.dashboard_members
    where user_id = (select auth.uid()) and role = 'owner' and active
  );
$$;

create or replace function public.dashboard_can_access(requested_feature text, needs_edit boolean default false)
returns boolean language sql stable security definer set search_path = ''
as $$
  select public.dashboard_is_owner() or exists (
    select 1 from public.dashboard_permissions p
    join public.dashboard_members m on m.user_id = p.user_id
    where m.user_id = (select auth.uid()) and m.active
      and p.feature = requested_feature
      and (not needs_edit or p.access_level = 'edit')
  );
$$;

revoke all on function public.dashboard_is_owner() from public, anon;
revoke all on function public.dashboard_can_access(text, boolean) from public, anon;
grant execute on function public.dashboard_is_owner() to authenticated;
grant execute on function public.dashboard_can_access(text, boolean) to authenticated;

revoke all on public.dashboard_members, public.dashboard_permissions from anon, authenticated;
grant select on public.dashboard_members to authenticated;
grant select, insert, update, delete on public.dashboard_permissions to authenticated;

-- Membership and Owner changes are server/admin-only. Staff cannot self-promote.
drop policy if exists dashboard_members_read on public.dashboard_members;
create policy dashboard_members_read on public.dashboard_members for select to authenticated
using (user_id = (select auth.uid()) or public.dashboard_is_owner());

drop policy if exists dashboard_permissions_read on public.dashboard_permissions;
create policy dashboard_permissions_read on public.dashboard_permissions for select to authenticated
using (user_id = (select auth.uid()) or public.dashboard_is_owner());

drop policy if exists dashboard_permissions_owner_write on public.dashboard_permissions;
create policy dashboard_permissions_owner_write on public.dashboard_permissions for all to authenticated
using (public.dashboard_is_owner()) with check (public.dashboard_is_owner());

commit;

select user_id, role, active from public.dashboard_members
where user_id = 'a64f1b13-ffc8-4210-9923-63bf41f49b5d';
