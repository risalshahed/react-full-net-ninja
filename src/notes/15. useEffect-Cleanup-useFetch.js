import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {
    // create an abort controller
    const abortCtrl = new AbortController();
    // ekhn eita amra 1ta fetch er sathe associate krbo, tarpor ei AbortController diye shei associated fetch STOP krbo!

    setTimeout( () => {
      // fetch(url)
      // associate AbortController with fetch
      fetch(url, { signal: abortCtrl.signal })
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
        // Abort diye fetch STOP krle 1ta error hy, oi error hoile throw this message
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setError(err.message);
          // terminate loading message if error occurs
          setIsPending(false);
        }
      })
    }, 1000)

    // N.B. useFetch hook ekhn Home component i.e. home page a asey
    // ekhn, ami homepage theke onno page a gele o, ei useFetch hook ta background a thake, verify krar jnno amra console.log('cleanup') diye check kri
    // return () => console.log('cleanup');
    // ei isse sort out krte amra useEffect a i.e. eikhane cleanup function use krbo
    // tar age, amra abort controller create krbo (upore inside useEffect function)

    // ei AbortController diye ( fetch(url, { signal: abortCtrl.signal }) ) STOP krbo
    return () => abortCtrl.abort();

  }, [url]);  // dependency is url i.e. url change hoile useEffect will re-run

  // return an object; array o return kra jaite pare, but object return korle home component a desctucture krar smy ei properties er order maintain kora mandatory thake NAA
  return { data, isPending, error }
}
 
export default useFetch;