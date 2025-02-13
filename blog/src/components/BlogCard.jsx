import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-600 mb-4">{blog.description}</p>
        <div className="text-sm text-gray-500">
          By {blog.author} on {blog.date}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
