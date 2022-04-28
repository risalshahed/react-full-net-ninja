import { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
  // let name = 'anonymous';
  // Array Destructuring
  // const [] = useState('anonymous');
  const [blogs, setBlogs] = useState([
    { title: 'First One', body: 'lorem ipsum ...', author: 'Niaj', id: 1 },
    { title: 'Second One', body: 'lorem ipsum ...', author: 'Diaj', id: 2 },
    { title: 'Third One', body: 'lorem ipsum ...', author: 'Riaj', id: 3 },
    { title: 'Fourth One', body: 'lorem ipsum ...', author: 'Niaj', id: 4 },
  ]);
  // now, it's reactive! button a click korle, name (anonymous) update hbe & handleClick funtion FIRE hoye setName (Risal) show krbe

  /* const handleClick = () => {
    setName('Risal');
    setAge(30);
  } */
  return (
    <>
      <div className="home">
        {/* passing blogs prop to BlogList component as propertyName={value} */}
        <BlogList blogs={blogs} title='All Blogs!' />
        <BlogList blogs=
          {blogs.filter(blog => (
            blog.author === 'Niaj'
          ))} title={"Niaj's Blogs"} />
      </div>
    </>
  );
}
 
export default Home;