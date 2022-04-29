// useState hook is to change display on button Click
import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  // here, name, setName are functions!
  /* const [name, setName] = useState('Anonymous');
  const [age, setAge] = useState('NaN'); */

  const [blogs, setBlogs] = useState(null);
  // initially null dbo
  // tarpor db.json theke data fetch korar pore data update krbo using "setBlogs"

  // empty array means, sudhu inital render a useEffect run korbe, pore NAAA
  // ei hook diye JSON data fetch krbo
  useEffect( () => {
    fetch('http://localhost:4000/blogs')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setBlogs(data);
        // data show krbe na! cz initially blogs i.e. data NULL dewa! so, jotokkhn data NULL thakbe, totokkhn amra <BlogList ... /> RETURN krbo na!
      })
  }, []);

  return (
    <>
      <div className="home">
        {/* in react, the following code means ... */}
        {/* if the L.H.S. i.e. blog is false, it doesn't care about the R.H.S. */}
        {/* the R.H.S will only execute if the L.H.S. in true i.e. NOT NULL */}
        {blogs && <BlogList blogs={blogs} title={'All Blogs'} />}
      </div>
    </>
  );
}

export default Home;