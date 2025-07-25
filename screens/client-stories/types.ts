interface TestimonialMedia {
    url:string,
    alt:string,
}

export interface Testimonial {
    id: number;
    author: string;
    reviewBody: string;
    job: string;
    datePublished: string;
    media: TestimonialMedia[];
    rating: number;
  }
  