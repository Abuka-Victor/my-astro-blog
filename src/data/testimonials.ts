import data from "./testimonials.json";

export type Testimonial = {
  name: string;
  role: string;
  link?: string;
  quote: string;
  /** Only quotes with explicit permission are ever rendered. */
  permission: boolean;
};

const testimonials = (data.testimonials as Testimonial[]).filter(
  t => t.permission === true && t.quote?.trim() && t.name?.trim()
);

export default testimonials;
