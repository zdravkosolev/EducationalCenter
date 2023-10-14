export interface HomepageProps {
  title: string;
  content: string;
  testimonials_title: string;
  testimonials_content: string;
}

export interface AboutpageProps {
  title: string;
  first_content_block: string;
  first_image: string;
  second_content_block: string;
  second_image: string;
  third_content_block: string;
}

export interface FeaturedCourse {
  id: string;
  title: string;
  is_full: boolean;
  start_time: string; // `${number}/${number}/${number}`;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  fee: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  first_name: string;
  last_name: string;
  message: string;
  avatar: string;
}
