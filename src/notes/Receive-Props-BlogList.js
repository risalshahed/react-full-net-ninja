/* say, amr 1ta blog site ase, jeikhane onk blogs ase
ekhn, usually ei blogs ami amr site er several jaygay show krbo, hoite pare seita kono speicific page e.g. home page a, hoite pare kono search a, or in anywhere
tahole, shei blogs amr bivinno jaygay dekhaite hoile, SAME CODE REPATEDLY likhte hbe!
ekhn, ei kisu code, which are pieces of components or bits of templates, ja website er different place or position a use hbe, shei templates k amra resuable components korar try krbo */

// receive the props sent from Home.js
/* const BlogList = (props) => {
  const blogs = props.blogs;
  // console.log(props, blogs);
  const title = props.title; */
// Destructuring (Another way to receive props)
const BlogList = ({blogs, title}) => {
  return (
    <>
      <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map( (blog) => (
          <div className='blog-preview' key={blog.id}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </div>
        ) )}
      </div>
    </>
  );
}
 
export default BlogList;