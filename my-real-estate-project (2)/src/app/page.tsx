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
    <div>
      <div className='bg-gray-100/50 pb-10 mb-5'>
      <h1 className='text-5xl p-5'>Wellcom to our Website</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis corrupti quis atque! Dicta ex enim facere nemo earum iure, unde, exercitationem, voluptas perspiciatis nihil quia eos qui? Labore vel obcaecati delectus suscipit error, molestias repellendus assumenda reprehenderit repellat mollitia fugit deleniti facere et cupiditate quam. Incidunt nulla culpa inventore.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, assumenda! Nihil cumque commodi architecto corporis ad. Eum, amet fugit asperiores architecto reprehenderit commodi deleniti suscipit exercitationem! Eveniet, voluptas eaque nostrum eum alias reiciendis iure, atque sit obcaecati facere quidem molestias at voluptate recusandae. Rerum ex ratione vel eligendi quisquam magnam placeat laudantium repellendus, quo, ea eius nostrum autem quidem aliquid ipsum harum nulla iusto sequi voluptatibus repellat dolorem cum quas aut! Qui, consequatur. Alias aperiam quasi dolore recusandae ipsa reprehenderit voluptas quae praesentium ipsam sint! Earum impedit facere architecto corporis sunt temporibus totam vitae, enim odio laboriosam est recusandae officia at! Cupiditate reiciendis, veniam nobis fuga harum, at nisi ipsum dolore <br />ullam nulla eaque soluta voluptas, natus debitis laborum officiis aliquam pariatur doloribus temporibus in dolores nam? Aut ducimus nulla tempore a eaque nemo velit modi molestias inventore, laboriosam illum maiores hic voluptatibus officia corporis autem numquam natus libero harum.
      </p>
      </div>
      <h2 className='text-center text-4xl m-10 font-bold text-gray-500'> ... Realstate List ...</h2>
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
    </div></div>
  );
}
