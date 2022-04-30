// useState hook is to change display on button Click
import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  // useState null thaka obsthay kisu print krbo
  const [isPending, setIsPending] = useState(true);


  useEffect( () => {
    // delay one second!
    setTimeout( () => {
      fetch('http://localhost:4000/blogs')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setBlogs(data);
        // data show krbe na! cz initially blogs i.e. data NULL dewa! so, jotokkhn data NULL thakbe, totokkhn amra <BlogList ... /> RETURN krbo na!
        // blogs i.e. data fetch howar pore 'loading' r print krbo na
        setIsPending(false);
      })
    }, 1000)
  }, []);

  return (
    <>
      <div className="home">
        {/* in react, the following code means ... */}
        {/* if the L.H.S. i.e. blog is false, it doesn't care about the R.H.S. */}
        {/* the R.H.S will only execute if the L.H.S. in true i.e. NOT NULL */}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title={'All Blogs'} />}
      </div>
    </>
  );
}

export default Home;