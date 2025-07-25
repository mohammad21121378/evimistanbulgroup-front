interface TestimonialMedia {
    url:string,
    alt:string,
}

interface TestimonialData {
    id: number;
    author: string;
    reviewBody: string;
    job: string;
    datePublished: string;
    media: TestimonialMedia[];
    rating: number;
}

export interface Testimonial {
    testimonials: TestimonialData[];
  }
  