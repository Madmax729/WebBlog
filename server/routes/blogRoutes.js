import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

// Fetch all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'name');
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Create a new blog
router.post('/', async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const newBlog = new Blog({ title, content, author });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: 'Error creating blog' });
  }
});

export default router;
