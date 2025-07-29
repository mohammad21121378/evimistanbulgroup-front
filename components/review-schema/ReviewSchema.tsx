'use client'

import { reviews } from "@/constants/mock"
import { Testimonial } from "../../screens/client-stories/types";
import SchemaJsonLd from "../schema-json-ld";

export default function ReviewSchema({ testimonials }: Testimonial) {
  const averageRating =
    testimonials.reduce((sum, review) => sum + review.rating, 0) /
    testimonials.length

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Evim istanbul group',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toFixed(1),
      reviewCount: reviews.length,
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.author,
      },
      datePublished: r.datePublished,
      reviewBody: r.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating,
        bestRating: '5',
        worstRating: '1',
      },
    })),
  }

  return (
    <SchemaJsonLd data={schema} />
  )
}
