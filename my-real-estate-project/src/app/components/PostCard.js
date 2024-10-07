// components/PostCard.js
import React from 'react';

const PostCard = ({ title, description, price, image }) => {
  return (
    <div className="bg-gray-50 m-2 p-6 border rounded-lg shadow-md overflow-hidden hover:-translate-y-5 ">
      <img src={image} alt={title} className=" rounded-lg w-full h-48 object-cover hover:scale-125" />
      <div className="p-5">
        <h2 className="text-center text-xl text-gray-700 font-bold mb-2 mt-3">{title}</h2>
        <p className=" text-center text-gray-400 mb-2">{description}</p>
        <p className=" text-center text-lg font-semibold mb-4 hover:font-bold">{price}</p>
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
