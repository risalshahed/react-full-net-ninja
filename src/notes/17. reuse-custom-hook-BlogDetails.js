import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data:blog, error, isPending } = useFetch(`http://localhost:4000/blogs/${id}`);
  return (
    <>
      <div className="blog-details">
        <h2>Blog Details - {id}</h2>
        {/* reuse custom hook useFetch & display the full blogs after being clicked from homepage */}
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blog && (
          <article>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            <div>{ blog.body }</div>
          </article>
        )}
      </div>
    </>
  );
}

export default BlogDetails;