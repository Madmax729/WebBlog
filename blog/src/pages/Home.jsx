import React from 'react';
import img1 from '../images/home.avif'
import '../App'
import { Link } from 'react-router-dom';
import { useEffect, useRef } from "react";
import BirdsBackground from "../components/BirdsBackground";

const Home = () => {
  const blogs = [
    {
      id: 1,
      title: 'Understanding React and Tailwind CSS',
      description: 'Learn how to combine React and Tailwind for efficient development.',
      author: 'John Doe',
      date: 'Dec 9, 2024',
      image: '/assets/images/react-tailwind.jpg',
    },
    {
      id: 2,
      title: 'The Power of Modern CSS',
      description: 'Explore modern CSS techniques for responsive design.',
      author: 'Jane Smith',
      date: 'Dec 8, 2024',
      image: '/assets/images/css-power.jpg',
    },
  ];
  

  return (
    <>
    <div className='relative min-h-screen w-full' >
    {/* Birds Background Animation */}
    <BirdsBackground />
    <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-black z-10 font-greatVibes
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent  inline-block'>Inspire</h1>

    </div >
    <div  className="h-full min-h-screen overflow-y-auto">
  
  

<div className="mx-auto px-4 py-8 mt-20 bg-blue-900 flex flex-col items-center">
  <h1 className="text-5xl text-white font-bold text-center mb-6">Welcome to Inspire</h1>
  <h3 className="text-2xl font-semibold text-center text-white">Create a blog worth sharing</h3>
  <h2 className="mx-auto max-w-3xl text-center text-md font-bold mt-4 text-white">
    Get a full suite of intuitive design features and powerful marketing tools to create a unique blog that leaves a lasting impression.
  </h2>
<Link to= "/landing">
<button className="bg-white hover:bg-gray-200 text-black font-bold text-md py-2 px-6 rounded-full mt-4">
    Start Blogging here
  </button>
</Link>
 

</div>

<div className='w-screen object-cover min-h-[50%vh] '>

<img src={img1} alt="yoga" />
</div>

<div className='bg-slate-200 py-24'>

<div className='mb-20'>

<pre className='text-4xl text-bold ml-40' >
<h2>The powerful infrastructure</h2>
<h2>behind your blog</h2>

</pre>

</div>

<div className='flex w-full justify-start  overflow-x-auto'>
<div className=' flex-1 p-4  '>
<hr className="border-t-2 border-black w-80 mx-auto my-4" />
<h2 className='mb-10 text-2xl ml-36'>Secure platform</h2>
<div className=' ml-32'>
Our team of skilled professionals, combined with a robust security system, works round the clock to ensure that the information shared by your audience is always protected and secure.

</div>

</div>
<div className=' flex-1 p-4' >
<hr className="border-t-2 border-black w-80 mx-auto my-4" />

<h2 className='mb-10 text-2xl ml-36'>Fast and Scalable Performance</h2>
<div className='ml-32 text-left'>
Our hosting solution ensures your website loads quickly and can easily scale as your audience grows. With automatic backups and global content delivery, your site will perform at its best, even during peak traffic times, providing a seamless experience for your visitors.
</div>
</div>
<div className=' flex-1 p-4'>
<hr className="border-t-2 border-black w-80 mx-auto my-4" />

<h2  className='mb-10 text-2xl ml-36'>Faster loading</h2>
<div className='ml-32 text-left'>
We have a performance-first culture, meaning our priority is providing the best user experience for you and your visitors, with faster loading sites that perform great on any device.
</div>
</div>

</div>


<Link to = "/signup" className='ml-32 text-xl'><u>Start Bloging</u>
</Link>

</div>


<div className=' w-screen h-1/2 py-8'>

<div className='mb-12'>
<h2 className='text-5xl ml-16'>Need Assistance?</h2>
<h2 className='text-3xl ml-16' >Ask Pixie to do it</h2>
</div>

<div className='flex '>
<div className=' mb-20 flex-1 p-6'>
<h2 className='text-3xl font-semibold text-center'> 24/7 support</h2>
<div className=' w-full text-center font-medium'> Find answers to all your questions with our chatbot. Pixie is here to spark ideas, recommend inspiring blog posts, and assist you with navigating the site effortlessly.
<br />
<span>
A perfect companion to make your journey on Inspire delightful and productive. 
</span>

</div>
</div>

<div className=' flex-1 p-6 flex flex-col items-center' >
<h2 className='text-center text-3xl font-bold' class=" text-center text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
Hii I'm Pixie how can i help you?

</h2>

<Link to= "/chat">
<button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-400 font-medium rounded-lg text-lg px-2.5 py-1.5 text-center me-2 mb-2 mt-6 ">Let's talk ✨ </button>
</Link>

</div>

</div>

</div>







</div>
    
    
    </>
  );
};

export default Home;
