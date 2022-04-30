// import { useEffect, useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  // useFetch theke ana data k ei context/ component a 'blog' hishabe assign kra hoilo
  const { data: blogs, isPending, error} = useFetch('http://localhost:4000/blogs');
  
  return (
    <>
      <div className="home">
        {error && <div>{ error }</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title={'All Blogs'} />}
      </div>
    </>
  );
}

export default Home;