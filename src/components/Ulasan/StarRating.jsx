import { useState } from 'react';

function StarRating() {
  const [rating, setRating] = useState(0); // Current selected rating
  const [hover, setHover] = useState(0);   // Hover preview

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return (
        <>
            <button
            key={starValue}
            type="button"
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            className={`text-[26px] my-1 ${
              starValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
            }`}
           >
            ★
          </button>
          {console.log(rating)}
        </>            
        );
      })}
      
    </div>
  );
}

export default StarRating;
