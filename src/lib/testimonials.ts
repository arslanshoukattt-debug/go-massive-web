// Client testimonials. The homepage section renders only when this array has
// entries - no fake reviews, no placeholder quotes on the live site.
//
// Text testimonial:  { quote, name, role, context }
// Video testimonial: add videoUrl (and optionally posterUrl) to any entry and
// the featured card renders a playable video instead of a text card - the
// section is built for both, nothing needs restructuring when video arrives.
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  context?: string; // e.g. "Amazon US · Outdoor & Leisure"
  videoUrl?: string;
  posterUrl?: string;
};

export const testimonials: Testimonial[] = [];
