import type { ServiceVisualKind } from "./services";

export const serviceArt: Record<
  ServiceVisualKind,
  {
    process: string;
    processAccent: string;
  }
> = {
  operations: {
    process: "GET THE DETAILS RIGHT.",
    processAccent: "KEEP GROWTH MOVING.",
  },
  advertising: {
    process: "TEST WITH INTENT.",
    processAccent: "SCALE WITH EVIDENCE.",
  },
  creative: {
    process: "FIND THE STORY.",
    processAccent: "EARN THE CHOICE.",
  },
  commerce: {
    process: "READY THE CHANNEL.",
    processAccent: "THEN EXPAND.",
  },
  search: {
    process: "UNDERSTAND THE INTENT.",
    processAccent: "REMOVE THE FRICTION.",
  },
  retention: {
    process: "KNOW THE MOMENT.",
    processAccent: "MAKE THE MESSAGE COUNT.",
  },
};
