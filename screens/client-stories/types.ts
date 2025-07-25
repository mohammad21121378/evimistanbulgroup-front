interface TestimonialMedia {
    url:string,
    alt:string,
}

export interface TestimonialData {
    id: number;
    name: string;
    text: string;
    span: string;
    datePublished: string;
    image: string;
    media: TestimonialMedia[];
    rating: number;
}

export interface Testimonial {
    testimonials: TestimonialData[];
  }
  