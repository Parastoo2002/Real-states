// components/PostCard.js
import React from 'react';

const PostCard = ({ title, description, price, image }) => {
  return (
    <div className="transition duration-700 ease-in-out bg-gray-50 m-3 p-6 border rounded-lg shadow-md overflow-hidden hover:-translate-y-5 hover:shadow-2xl ">
      <img src={image} alt={title} className=" rounded-2xl w-full h-48 object-cover hover:scale-125 hover:rounded-md hover:transition duration-[2000ms] ease-in-out" />
      <div className="p-5">
        <h2 className="text-center text-xl text-gray-700 font-bold mb-2 mt-3">{title}</h2>
        <p className=" text-center text-gray-400 mb-2">{description}</p>
        <p className=" text-center text-lg font-semibold mb-4 hover:text-3xl hover:text-pink-500">{price}</p>
        <div className='flex justify-center'>
        <button className=" rounded-full bg-gray-500 shadow-lg shadow-gray-700/50 text-white px-6 py-2 rounded hover:bg-rose-400">
          More Info
        </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
