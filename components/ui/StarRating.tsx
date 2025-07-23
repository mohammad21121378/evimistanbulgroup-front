import React from "react";

const filledStar = (
  <svg
    width="2rem"
    viewBox="0 0 32 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 0L21.0785 9.01009L31.2169 11.0557L24.2171 18.6699L25.4046 28.9443L16 24.64L6.59544 28.9443L7.78287 18.6699L0.783095 11.0557L10.9215 9.01009L16 0Z"
      fill="#EA580C"
    />
  </svg>
);

const emptyStar = (
  <svg
    width="2rem"
    viewBox="0 0 32 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.6426 9.25586L20.7549 9.45508L20.9795 9.5L30.248 11.3701L23.8486 18.3311L23.6943 18.5L23.7207 18.7275L24.8057 28.1201L16.208 24.1855L16 24.0898L15.792 24.1855L7.19336 28.1201L8.2793 18.7275L8.30566 18.5L8.15137 18.3311L1.75098 11.3701L11.0205 9.5L11.2451 9.45508L11.3574 9.25586L16 1.01758L20.6426 9.25586Z"
      stroke="#CBD5E1"
    />
  </svg>
);

const StarRating = ({ rating = 0 }) => {
  const totalStars = 5;

  return (
    <div className="flex gap-2">
      {Array.from({ length: totalStars }).map((_, index) => (
        <span key={index}>
          {index < rating ? filledStar : emptyStar}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
