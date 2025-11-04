import React from "react";
import Image from "next/image";

const CommentsBox = ({
  imageSrc,
  userName,
  rating,
  commentDate,
  commentText,
}) => {
  const renderStars = () => {
    if (typeof rating === "number") {
      const fullStars = Math.floor(rating);
      const hasHalf = rating % 1 !== 0;
      const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

      return (
        <div className="flex text-[#B7AE8F] text-sm mt-1">
          {Array(fullStars)
            .fill()
            .map((_, i) => (
              <i key={`full-${i}`} className="fa-solid fa-star"></i>
            ))}
          {hasHalf && <i className="fa-solid fa-star-half-stroke"></i>}
          {Array(emptyStars)
            .fill()
            .map((_, i) => (
              <i key={`empty-${i}`} className="fa-regular fa-star"></i>
            ))}
        </div>
      );
    }
    return <span className="text-[#B7AE8F] text-lg ml-1">{rating}</span>;
  };

  return (
    <div className="bg-[#FFFEFC] p-4 rounded-xl mb-6 border border-[#B7AE8F33] shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center mb-3">
        <Image
          src={imageSrc}
          alt={`Foto de ${userName}`}
          width={48}
          height={48}
          className="rounded-full object-cover border border-[#B7AE8F50]"
        />
        <div className="ml-3 flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-base text-[#4A362F]">
              {userName}
            </span>
            <span className="text-sm text-[#A6A6A6]">{commentDate}</span>
          </div>
          {renderStars()}
        </div>
      </div>
      <p className="text-sm md:text-base text-[#4A362F] leading-relaxed text-justify">
        {commentText}
      </p>
    </div>
  );
};

export default CommentsBox;
