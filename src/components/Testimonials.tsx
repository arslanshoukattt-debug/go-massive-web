import { Reveal } from "./Reveal";
import { testimonials } from "../lib/testimonials";

// Renders nothing until real testimonials exist in lib/testimonials.ts.
// Featured slot (first entry) supports video via videoUrl/posterUrl; the rest
// render as a supporting quote grid.
export function Testimonials() {
  if (testimonials.length === 0) return null;
  const [featured, ...rest] = testimonials;

  return (
    <section className="border-t border-[#020d1f]/10 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <Reveal className="mx-auto max-w-[1600px]">
        <p className="gm-eyebrow gm-text-red-safe">What clients say</p>
        <h2 className="mt-5 max-w-4xl text-[clamp(2rem,5vw,4.4rem)] font-semibold uppercase leading-[.92] tracking-[-.04em]">In their words.</h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <figure className="flex flex-col justify-between border border-[#020d1f]/12 bg-[#F7F8FA] p-8 sm:p-10">
            {featured.videoUrl ? (
              <video controls preload="none" poster={featured.posterUrl} className="w-full" src={featured.videoUrl} />
            ) : (
              <blockquote className="text-xl font-medium leading-9 tracking-[-.02em] sm:text-2xl">&ldquo;{featured.quote}&rdquo;</blockquote>
            )}
            <figcaption className="mt-8 border-t border-[#020d1f]/10 pt-5">
              <p className="font-semibold">{featured.name}</p>
              <p className="mt-1 text-sm text-[#596475]">{featured.role}{featured.context ? ` · ${featured.context}` : ""}</p>
            </figcaption>
          </figure>
          <div className="grid gap-5">
            {rest.slice(0, 2).map((t) => (
              <figure key={t.name} className="flex flex-col justify-between border border-[#020d1f]/12 p-7">
                <blockquote className="leading-7 text-[#4E5A6B]">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 border-t border-[#020d1f]/10 pt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="mt-0.5 text-xs text-[#596475]">{t.role}{t.context ? ` · ${t.context}` : ""}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
