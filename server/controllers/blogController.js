const Blog = require("../models/Blog");

// Fetch all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create new blog
const createBlog = async (req, res) => {
  try {
    const { title, excerpt, author, category, image } = req.body;
    const newBlog = new Blog({ title, excerpt, author, category, image });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getBlogs, createBlog };
