import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'First One', body: 'lorem ipsum ...', author: 'Niaj', id: 1 },
    { title: 'Second One', body: 'lorem ipsum ...', author: 'Diaj', id: 2 },
    { title: 'Third One', body: 'lorem ipsum ...', author: 'Riaj', id: 3 },
    { title: 'Fourth One', body: 'lorem ipsum ...', author: 'Niaj', id: 4 },
  ]);
  

  const handleDelete = (id) => {
    const newBlogs = blogs.filter( (blog) => blog.id !== id );
    setBlogs(newBlogs);
  }

  // component initially akbr render hoy, abr re-render hoy jokhn state update hoy
  // useEffect hook is a way to run a code on every render
  // kisu return kore na so eita k kono const a store kora hosse na; eita muloto every time run korbe jokhn e component re-render hobe, initial render a o run krbe!
  /* useEffect( () => {
    console.log('useEffect ran');
    console.log(blogs);
  }, [] ); */

  // empty array means, sudhu inital render a useEffect run korbe, pore NAAA, BUT ...
  // we want dependencies! tar mane, kono nirdishto kisur upor depend kore useEffect re-render hbe inital render sara o! for example,
  const [name, setName] = useState('Anonymous');
  // ekhn, amra chai, "name" change hoile, useEffect re-render hbe! so, ADD this on the 2nd argument of useEffect as an ELEMENT of an ARRAY
  useEffect( () => {
    console.log('useEffect ran');
    console.log(name);
  }, [name] );

  return (
    <>
      <div className="home">
        <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete} />
        <button onClick={() => setName('Risal')}>Change Name</button>
        {/* display the name */}
        <p>{ name }</p>
      </div>
    </>
  );
}
 
export default Home;