import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  img: string;
  isSale: boolean;
}

const products: Product[] = [
  { id: 1, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00", img: "/images/img1.png", isSale: false },
  { id: 2, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00", img: "/images/img2.png", isSale: true },
  { id: 3, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00", img: "/images/img3.png", isSale: false },
  { id: 4, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00", img: "/images/img4.png", isSale: false },
  { id: 5, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00", img: "/images/img5.png", isSale: false },
  { id: 6, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00", img: "/images/img6.png", isSale: false },
];

const LatestProduct: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Latest Products</h2>
        <div className="flex justify-center gap-8 mb-12">
          <span className="text-pink-500 cursor-pointer border-b-2 border-pink-500 pb-1">New Arrival</span>
          <span className="text-gray-800 cursor-pointer hover:text-pink-500">Best Seller</span>
          <span className="text-gray-800 cursor-pointer hover:text-pink-500">Featured</span>
          <span className="text-gray-800 cursor-pointer hover:text-pink-500">Special Offer</span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-md shadow-md p-4 bg-white relative group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover rounded-md"
                  aria-label={`Image of ${product.name}`}
                />
                {product.isSale && (
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 text-sm font-bold rounded-full">
                    Sale
                  </div>
                )}

                {/* Hover Icons */}
                <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-10">
                  <button
                    className="bg-white text-gray-600 p-2 rounded-full shadow-md hover:bg-pink-500 hover:text-white transition duration-200"
                    aria-label="Add to Cart"
                  >
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                  <button
                    className="bg-white text-gray-600 p-2 rounded-full shadow-md hover:bg-pink-500 hover:text-white transition duration-200"
                    aria-label="Add to Wishlist"
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="bg-white text-gray-600 p-2 rounded-full shadow-md hover:bg-pink-500 hover:text-white transition duration-200"
                    aria-label="View Details"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <h3 className="mt-4 text-lg font-medium text-gray-800">{product.name}</h3>
              <div className="flex items-center mt-2">
                <span className="text-pink-500 font-semibold">{product.price}</span>
                <span className="text-gray-500 ml-3 line-through">{product.oldPrice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
