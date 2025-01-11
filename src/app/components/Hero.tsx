import React from "react";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  leftImage?: string; // Optional with a default fallback
  rightImage?: string; // Optional with a default fallback
  discountText?: string; // Optional
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  leftImage = "/images/lamp.png", // Default fallback image
  rightImage = "/images/cover.png", // Default fallback image
  discountText,
}) => {
  return (
    <section className="bg-light-purple-100 py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="flex items-start gap-10">
          {/* Left Image */}
          <div>
            <Image
              src={leftImage}
              alt="Left Decorative Image"
              width={600}
              height={600}
              className="object-contain"
              aria-label="Left Decorative Image"
            />
          </div>

          {/* Text Section */}
          <div className="max-w-lg">
            <p className="text-pink-500 font-semibold mb-4">{subtitle}</p>
            <h1 className="text-4xl font-bold mb-4 leading-tight">{title}</h1>
            <p className="text-gray-600 mb-6">{description}</p>
            <button
              className="bg-pink-500 text-white px-6 py-3 font-semibold rounded-md"
              aria-label="Shop Now"
            >
              {buttonText}
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          <Image
            src={rightImage}
            alt="Furniture Cover"
            width={500}
            height={500}
            className="w-full max-w-md rounded-md"
            aria-label="Furniture Cover"
          />
          {discountText && (
            <div className="absolute top-8 right-8 bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-full">
              {discountText}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
