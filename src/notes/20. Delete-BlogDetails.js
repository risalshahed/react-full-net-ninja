import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const { data:blog, error, isPending } = useFetch(`http://localhost:4000/blogs/${id}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:4000/blogs/${blog.id}`, {
      method: 'DELETE'
    }).then( () => {
      history.push('/');
    })
  }
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
            <button onClick={handleDelete}>Remove</button>
          </article>
        )}
      </div>
    </>
  );
}

export default BlogDetails;