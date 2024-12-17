import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  img: string;
}

const products: Product[] = [
  { id: 1, name: "Chair 1", img: "/images/chair1.png" },
  { id: 2, name: "Chair 2", img: "/images/chair2.png" },
  { id: 3, name: "Chair 3", img: "/images/chair3.png" },
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="bg-white py-10">
      <h3 className="text-center text-2xl font-bold mb-6">Featured Products</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={product.img}
              alt={`Image of ${product.name}`}
              width={128}
              height={128}
              className="object-cover rounded"
            />
            <h4 className="mt-4 text-lg font-semibold text-gray-700">
              {product.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
