import React from "react";
import Image from "next/image";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

// Define the type for each blog item
interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  description: string;
  image: string;
}

// Define the Blogs component
const Blogs: React.FC = () => {
  const blogs: Blog[] = [
    {
      id: 1,
      title: "Top essential Trends in 2021",
      author: "SaberAli",
      date: "21 August, 2020",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      image: "/images/blog1.png",
    },
    {
      id: 2,
      title: "Top essential Trends in 2021",
      author: "Surfauxion",
      date: "21 August, 2020",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      image: "/images/blog2.png",
    },
    {
      id: 3,
      title: "Top essential Trends in 2021",
      author: "SaberAli",
      date: "21 August, 2020",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      image: "/images/blog3.png",
    },
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-dark-blue mb-8">
          Latest Blog
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.length === 0 ? (
            <p className="text-center text-gray-600">No blogs available</p>
          ) : (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Blog Image */}
                <Image
                  src={blog.image}
                  alt={`Blog Image: ${blog.title}`}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />

                {/* Blog Content */}
                <div className="p-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="mr-4 flex items-center">
                      <FaUser className="text-pink-500 mr-1" />
                      {blog.author}
                    </span>
                    <span className="flex items-center">
                      <FaCalendarAlt className="text-yellow-500 mr-1" />
                      {blog.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-dark-blue mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <a
                    href={`/blog/${blog.id}`}
                    className="text-pink-500 font-semibold hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
