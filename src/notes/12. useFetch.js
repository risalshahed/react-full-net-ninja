import { useState, useEffect } from 'react';
// useFetch amdr banano custom hook, so amra eikhane hardcode kore spicific URL na diye, dynamically dbo jno url change hoileo amra seita REUSE korte pari
const useFetch = (url) => {
  // const [blogs, setBlogs] = useState(null);
  // blogs too much specific, to REUSE, we should use a bit more generalized name, such as 'data'
  // 'http://localhost:4000/blogs'
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {
    setTimeout( () => {
      fetch(url)
      .then((res) => {
        if(!res.ok) {
          throw Error('No data in this resource');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);

        setIsPending(false);
        setError(false);
      })
      // catch the THROWN error
      .catch( (err) => {
        setError(err.message);
        // terminate loading message if error occurs
        setIsPending(false);
      })
    }, 1000)
  }, [url]);  // dependency is url i.e. url change hoile useEffect will re-run
  
  // return an object; array o return kra jaite pare, but object return korle home component a desctucture krar smy ei properties er order maintain kora mandatory thake NAA
  return { data, isPending, error }
}
 
export default useFetch;