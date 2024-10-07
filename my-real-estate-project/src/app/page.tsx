// page.tsx
import PostCard from './components/PostCard';

export default function Home() {
  const posts = [
    {
      title: 'Cozy Cottage in the Countryside',
      description: 'A peaceful retreat in a picturesque village.',
      price: '$850,000',
      image: './images/6.jpeg',
    },
    {
      title: 'Luxury Villa in Beverly Hills of USA',
      description: 'A stunning villa with a beautiful view of the city.',
      price: '$5,000,000',
      image: './images/1.jpeg', 
    },
    {
      title: 'Modern Apartment in New York',
      description: 'A spacious apartment located in the heart of the city.',
      price: '$2,000,000',
      image: './images/2.jpeg', 
    },
    {
      title: 'Cozy Cottage in the Countryside',
      description: 'A peaceful retreat in a picturesque village.',
      price: '$850,000',
      image: './images/3.jpeg',
    },
    {
      title: 'Luxury Villa in Beverly Hills of USA',
      description: 'A stunning villa with a beautiful view of the city.',
      price: '$5,000,000',
      image: './images/4.jpg', 
    },
    {
      title: 'Modern Apartment in New York',
      description: 'A spacious apartment located in the heart of the city.',
      price: '$2,000,000',
      image: './images/5.jpg', 
    },
    
    {
      title: 'Luxury Villa in Beverly Hills of USA',
      description: 'A stunning villa with a beautiful view of the city.',
      price: '$5,000,000',
      image: './images/7.jpg', 
    },
    {
      title: 'Modern Apartment in New York',
      description: 'A spacious apartment located in the heart of the city.',
      price: '$2,000,000',
      image: './images/8.jpeg', 
    },
    
  ];

  return (
    <div className=" bg-rose-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts.map((post, index) => (
        <PostCard 
          key={index} 
          title={post.title} 
          description={post.description} 
          price={post.price} 
          image={post.image} 
        />
      ))}
    </div>
  );
}
