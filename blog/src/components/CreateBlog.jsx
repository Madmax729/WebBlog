import React, { useState } from 'react';

const CreateBlog = ({ onBlogCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, author: "USER_ID" })  // Replace USER_ID dynamically
    });
    const data = await response.json();
    onBlogCreated(data);
  };

  return (
    <form onSubmit={handleSubmit} className="create-blog-form">
      <input type="text" placeholder="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Blog Content" value={content} onChange={(e) => setContent(e.target.value)} required />
      <button type="submit">Create Blog</button>
    </form>
  );
};

export default CreateBlog;
