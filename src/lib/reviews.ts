export type ReviewProfile = {
  name: string;
  logo?: string;
  url: string;
  reviewUrl: string;
  rating: number;
  count: number;
  checkedAt: string;
};

// Public-profile snapshots; replace with official account widgets when supplied.
// Google is intentionally absent until the correct business profile is verified.
export const reviewProfiles: ReviewProfile[] = [
  { name: "Clutch", logo: "/reviews/clutch.png", url: "https://clutch.co/profile/go-massive", reviewUrl: "https://review.clutch.co/review/?provider_id=2513026", rating: 5, count: 1, checkedAt: "2026-10-02" },
  { name: "Trustpilot", logo: "/reviews/trustpilot.svg", url: "https://www.trustpilot.com/review/go-massive.com", reviewUrl: "https://www.trustpilot.com/evaluate/go-massive.com", rating: 3.7, count: 1, checkedAt: "2026-10-02" },
];
