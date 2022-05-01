import { useState } from 'react';
// homePage or anywhere redirect kre useHistory hook
import { useHistory } from 'react-router-dom';

const Create = () => {
  // track the values in the form
  // const [title, setTitle] = useState('hello');
  // problem! title emne hardcode krle value change kra jabe na form a!
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // set an inital value for select
  const [author, setAuthor] = useState('mario');
  // create a loading state; initiall false
  const [isPending, setIsPending] = useState(false);
  // go back & forward with following const
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // create an object of input values
    const blog = { title, author, body };
    // console.log(blog);

    setIsPending(true);

    // we'll send POST request now, jehetu amra ei application a 1bar e krbo, tai eikhanei function diye krbo, barbar (reuse) krle, amdr custom hook useFetch use krtm
    // now, let's send POST request
    fetch('http://localhost:4000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
      // json server automatically 1ta id ADD kore dbe, jodio data/db.json a 'id' amra dc, but not necessary, cz JSON auto seita add kore nibe
    }).then( () => {
      console.log('New blog added');
      // complete howar pore, abr false
      setIsPending(false);

      // to go back, minus sign required
      // history.go(-1); // -1 -> 1 step back, browser amra j back/forward dei, oitai!
      // ****** go to homePage ******
      history.push('/');
  })
  }
  return (
    <>
      <div className='create'>
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input
            type='text'
            required
            value={title}
            // form a value change krte hoile,
            onChange={ (e) => setTitle(e.target.value) }
            // but this won't display title in the webpage, to display it -> #showTitle
          />
          <label>Blog body:</label>
          <textarea
            required
            onChange={ (e) => setBody(e.target.value) }
          >
          </textarea>
          <label>Blog author:</label>
          <select
            value={author}
            onChange={ (e) => setAuthor(e.target.value) }
          >
            <option value='mario'>mario</option>
            <option value='yoshi'>yoshi</option>
            <option value='not-ninjas'>not-ninjas</option>
          </select>
          {/* <button>Add Blog</button> */}
          {/* IsPending true/false i.e. loading state a thakle seperate buttons */}
          { !isPending && <button>Add Blog</button> }
          { isPending && <button>Adding Blog...</button> }
          {/* #showTitle */}
          <p>
            <strong>Title:</strong> { title }
          </p>
          <p>
            <strong>Body:</strong> { body }
          </p>
        </form>
      </div>
    </>
  );
}
 
export default Create;