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
  useEffect( () => {
    console.log('useEffect ran');
    console.log(blogs); // warning: ei hook main data i.e. blogs k MODIFY kore!
  } );

  return (
    <>
      <div className="home">
        <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete} />
      </div>
    </>
  );
}
 
export default Home;