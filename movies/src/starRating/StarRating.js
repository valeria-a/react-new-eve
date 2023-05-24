import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    setRating(index);
  };

  return (
    <div>
      <p>Rate this:</p>
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={index}
          filled={index <= (hoverRating || rating)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        />
      ))}
      <p>Selected rating: {rating}</p>
    </div>
  );
};

const Star = ({ filled, ...rest }) => (
  <span
    {...rest}
    style={{ color: filled ? 'orange' : 'grey', cursor: 'pointer' }}
  >
    &#9733;
  </span>
);

export default StarRating;
