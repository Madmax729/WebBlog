import React, { useState } from 'react';
import { UserContext } from "../context/UserContext";
import { User , Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Search from "../components/SearchBar"; // Adjust the path as needed
import CreateBlog from '../components/CreateBlog';
import { Plus } from "lucide-react";
import ProfileDropdown from '../components/ProfileDropdown';
// import { User } from "lucide-react";
import CreatePost from './CreatePost';
import { Link } from "react-router-dom";
// import Profile from './Profile';

import { useContext } from "react";

// Mock data for demonstration
const mockBlogs = [
  {
    id: 1,
    title: "The Brightest Stars in the Darkest Sky",
    excerpt: "New Zealand's Dark Sky Project at Lake Tekapo",
    author: "tanisha massey",
    date: "27 Sep",
    category: "Travel",
    likes: 1,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "The Food and Environment in Costa Rica Healed My Gut and My Soul",
    excerpt: "I didn't know I was in for a week of wellness",
    author: "tanisha massey",
    date: "27 Sep",
    category: "Food",
    likes: 1,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "I'm Not Afraid — Let's Say I'm Aware",
    excerpt: "Traveling always gives this woman food for thought",
    author: "tanisha massey",
    date: "27 Sep",
    category: "Travel",
    likes: 0,
    image: "https://images.unsplash.com/photo-1682686580003-82051c652248?auto=format&fit=crop&q=80&w=800"
  },
];

const categories = [
  "Programming", "Hollywood", "Film Making", "Social Media",
  "Cooking", "Technology", "Finances", "Travel"
];

function Landing() {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [hoveredBlog, setHoveredBlog] = useState<number | null>(null);

const [selectedCategory, setSelectedCategory] = useState(null);
const [hoveredBlog, setHoveredBlog] = useState(null);
const [searchQuery, setSearchQuery] = useState(""); //search query
// const { User } = useContext(UserContext);
const [showProfileDropdown, setShowProfileDropdown] = useState(false);


  const filteredBlogs = selectedCategory
    ? mockBlogs.filter(blog => blog.category === selectedCategory)
    : mockBlogs;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1">
            <motion.nav 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="border-b border-gray-200 mb-8"
            >


                {/* Profile Dropdown */}
             <div className="relative flex justify-end ">
            <button onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
              <User size={32} className="text-gray-900" />
            </button>
            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2">
                <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                {/* <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link> */}
                <a href="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</a>
                <a href="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sign Out</a>
              </div>
            )}
          </div>

 {/* Search Bar */}

 <div className="relative w-full">
           <div className=' w-full'>

            <Search className=" w-[400px] " value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
           </div>

          </div>


          {/* space-x-10 */}

              <div className="flex justify-between items-center w-full">
                <button className="text-gray-900 py-4 border-b-2 border-gray-900 font-medium  text-sm">
                  All
                </button>

                <Link to="/CreatePost" className="ml-auto">
  <button className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700">
    <Plus size={20} />
    
  </button>
</Link>

              </div>

              

            </motion.nav>

            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedCategory || 'all'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                {filteredBlogs.map((blog, index) => (
                  <motion.article 
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                    onHoverStart={() => setHoveredBlog(blog.id)}
                    onHoverEnd={() => setHoveredBlog(null)}
                  >
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-1 space-y-4">
                        <motion.div 
                          initial={{ scale: 1 }}
                          animate={{ scale: hoveredBlog === blog.id ? 1.02 : 1 }}
                          className="flex items-center space-x-2 text-sm text-gray-600"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=50&h=50"
                            alt={blog.author}
                            className="w-5 h-5 rounded-full"
                          />
                          <span>{blog.author}</span>
                          <span>·</span>
                          <span>{blog.date}</span>
                        </motion.div>
                        <motion.h2 
                          className="text-xl font-bold text-gray-900 cursor-pointer"
                          whileHover={{ scale: 1.01 }}
                        >
                          {blog.title}
                        </motion.h2>
                        <p className="text-gray-600">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center space-x-4">
                          <motion.span 
                            whileHover={{ scale: 1.05 }}
                            className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full cursor-pointer"
                          >
                            {blog.category}
                          </motion.span>
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-1 text-sm text-gray-600"
                          >
                            <Heart size={16} className="text-gray-400" />
                            <span>{blog.likes}</span>
                          </motion.button>
                        </div>
                      </div>
                      <motion.div 
                        className="md:w-48 w-full overflow-hidden rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </motion.div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="lg:w-80"
          >
            <div className="space-y-8">
              <div>
                <motion.h2 
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-base font-semibold text-gray-900 mb-4"
                >
                  Stories from all interests
                </motion.h2>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <motion.button
                      key={category}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <motion.h2 
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-base font-semibold text-gray-900 mb-4 flex items-center"
                >
                  Trending <span className="text-gray-400 ml-1">→</span>
                </motion.h2>
                <div className="space-y-6">
                  {[1, 2, 3].map((num, index) => (
                    <motion.div 
                      key={num}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 cursor-pointer"
                    >
                      <span className="text-3xl font-bold text-gray-200">
                        0{num}
                      </span>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=50&h=50"
                            alt="Author"
                            className="w-5 h-5 rounded-full"
                          />
                          <span>tanisha massey</span>
                          <span>·</span>
                          <span>27 Sep</span>
                        </div>
                        <h3 className="font-bold text-gray-900 hover:text-gray-600 transition-colors">
                          The Brightest Stars in the Darkest Sky
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Landing;