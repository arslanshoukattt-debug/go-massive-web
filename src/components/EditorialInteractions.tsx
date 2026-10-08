"use client";

import { useEffect, useRef, type ReactNode } from "react";

// The server supplies only the currently published article, never the scheduled collection.
// Enhance its reviewed HTML without evaluating scripts or replacing the readable SSR content.
export function EditorialInteractions({ children }: { children: ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = container.current;
    if (!root) return;
    const controller = new AbortController();
    const text = (selector: string, value: string) => {
      const node = root.querySelector(selector);
      if (node) node.textContent = value;
    };
    const attribute = (selector: string, name: string, value: number) => root.querySelector(selector)?.setAttribute(name, String(value));
    const money = (n: number) => (n < 0 ? '−' : n > 0 ? '+' : '') + '$' + Math.abs(n).toFixed(2);
    const slider = root.querySelector<HTMLInputElement>('#acos');
    const updateAcos = () => {
      if (!slider) return;
      const acos = Number(slider.value), spend = 40 * acos / 100;
      const a = 16 - spend, b = 8 - spend, x = 44 + acos / 60 * 370;
      text('#acos-value b', String(acos));
      slider.setAttribute('aria-valuetext', `${acos} percent ACoS`);
      for (const [key, value] of [['a', a], ['b', b]] as const) {
        text('#value-' + key, money(value));
        attribute('#point-' + key, 'cx', x);
        attribute('#point-' + key, 'cy', 110 - value / 8 * 43);
      }
      attribute('#cursor-line', 'x1', x); attribute('#cursor-line', 'x2', x);
      text('#chart-description', `At ${acos}% ACoS, each product spends $${spend.toFixed(2)} on advertising. Product A contribution is ${money(a)}, Product B is ${money(b)}. Fixed overhead excluded. Product A breaks even at 40%, Product B at 20%.`);
    };
    root.addEventListener('input', event => {
      if (event.target === slider) updateAcos();
    }, { signal: controller.signal });
    root.addEventListener('click', event => {
      if ((event.target as Element).closest('#reset-example') && slider) { slider.value = '25'; updateAcos(); }
    }, { signal: controller.signal });
    root.addEventListener('change', event => {
      const target = event.target as HTMLInputElement | HTMLSelectElement;
      if (target.matches('.gate')) {
        const count = root.querySelectorAll('.gate:checked').length;
        text('#gate-output', `${count} of 4 gates reviewed`);
        text('#gate-advice', count === 4 ? 'All four gates marked reviewed. Confirm the evidence and your launch decision with the responsible owners.' : 'Unresolved gates remain. Collect the evidence before committing to launch.');
      }
      if (target.id === 'shipping') {
        const checked = (target as HTMLInputElement).checked;
        const values = checked ? [82, 78, 80, 90] : [72, 78, 80, 90];
        values.forEach((value, i) => {
          const bar = root.querySelector<HTMLElement>('#offer-' + i);
          if (bar) bar.style.width = value + '%';
          text('#offer-value-' + i, '$' + value);
        });
        const sorted = [...values].sort((a, b) => a - b);
        text('#median', (checked ? 'Median comparable amount: $' : 'Median item-only amount: $') + (sorted[1] + sorted[2]) / 2);
      }
      const rows = target.id === 'symptom' ? [
        ['Check availability and relevance', 'Verify item status, category, and attributes before assuming you need more traffic.'],
        ['Inspect the visible offer', 'Compare the main image, title, price, and competing offers for relevance and clarity.'],
        ['Investigate buying hesitation', 'Check specifications, included quantity, delivery expectations, and total value.'],
        ['Compare promise with delivery', 'Review return reasons and support questions against the actual product and page.'],
      ] : target.id === 'scenario' ? [
        ['Consider a narrow exclusion', 'Confirm incompatibility, then check match type and scope before blocking traffic.'],
        ['Investigate before excluding', 'Check reporting maturity, spending against your economic limit, bid cost, and the product offer.'],
        ['Monitor and test deliberately', 'Confirm the goal is met on a consistent basis before making a controlled targeting change.'],
      ] : null;
      if (rows) {
        const row = rows[Number(target.value)];
        const prefix = target.id === 'symptom' ? '#diagnosis-' : '#decision-';
        if (row) { text(prefix + 'title', row[0]); text(prefix + 'copy', row[1]); }
      }
    }, { signal: controller.signal });
    updateAcos();
    return () => controller.abort();
  }, []);
  return <div ref={container} className="editorial-article">{children}</div>;
}
