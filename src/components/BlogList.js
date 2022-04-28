// V.V.I. "function" k o amra props hishebe pass korte pari!
// Destructuring (Another way to receive props)
const BlogList = ({blogs, title, handleDelete}) => {
  return (
    <>
      <div className="blog-list">
        <h2>{ title }</h2>
        {/* blogs.map( (blog) SIMILAR to forEach(blogs as blog) */}
        {blogs.map( (blog) => (
          <div className='blog-preview' key={blog.id}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            {/* arrow function na dle, render (page load) er sathe sathe call hoye jabe, without even click on button, tai arrow function dewa, N.B. parameter na thakle simple function dlei cholto */}
            <button onClick={ () => handleDelete(blog.id) }>Remove Blog</button>
          </div>
        ) )}
      </div>
    </>
  );
}
 
export default BlogList;