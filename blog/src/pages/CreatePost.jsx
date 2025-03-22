import React, { useState, ChangeEvent } from 'react';
import { Image, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  const navigate = useNavigate();
  const [banner, setBanner] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

//   const handleBannerChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setBanner(imageUrl);
//     }
//   };
const handleBannerChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBanner(imageUrl);
    }
  };


  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto ">
        <button
          onClick={() => navigate('/landing')}
          className="flex items-start gap-2 text-gray-600 hover:text-gray-900 mb-8 mt-14"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        <div className="space-y-8">
          {/* Banner Upload Section */}
          <div className="relative">
            {banner ? (
              <img
                src={banner}
                alt="Blog banner"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-[400px] bg-gray-100 rounded-lg flex flex-col items-center justify-center cursor-pointer">
                <label htmlFor="banner-upload" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <Image size={48} className="text-gray-400 mb-4" />
                    <p className="text-gray-500">Click to upload banner image</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Recommended: 1600x900px
                    </p>
                  </div>
                  <input
                    id="banner-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleBannerChange}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>

          {/* Title Section */}
          <div className='p-4 leading-[1.5]'>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full h-auto text-3xl font-bold border-none outline-none placeholder-gray-300 focus:ring-0  "
              
            />
          </div>

          {/* Description Section */}
          <div className='p-2 '>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell your story..."
              // className="w-full min-h-[400px] text-xl border-none outline-none resize-none placeholder-gray-300 focus:ring-0 mt-4 p-2"
              className="w-full min-h-[400px] text-xl border-none outline-none resize-none placeholder-gray-300 focus:ring-0 mt-4 "
            />
          </div>

          {/* Publish Button */}
          <div className="fixed bottom-8 right-8">
            <button
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
              onClick={() => {
                // Handle publish logic here
                console.log({ banner, title, description });
              }}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;