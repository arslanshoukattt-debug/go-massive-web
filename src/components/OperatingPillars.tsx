import { Reveal } from "./Reveal";

const pillars = [
  [
    "Account monitoring",
    "Review sales, spend, stock and account alerts so issues can be investigated early.",
  ],
  [
    "Experienced decision-making",
    "Review priorities against product margins, available stock and the agreed plan.",
  ],
  [
    "Hands-on delivery",
    "Manage bids, budgets, catalogue changes and support cases with clear responsibility for each task.",
  ],
  [
    "Practical automation",
    "Automate repeatable reporting and checks so the team can spend more time on decisions.",
  ],
  [
    "Clear reporting",
    "Explain what changed, what worked, what did not and what we recommend next.",
  ],
  [
    "Regular reviews",
    "Revisit budgets, creative and priorities as results and business conditions change.",
  ],
];

export function OperatingPillars() {
  return (
    <Reveal className="operating-principles">
      {pillars.map(([title, description], index) => (
        <article key={title}>
          <span className="principle-number">0{index + 1}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </Reveal>
  );
}
