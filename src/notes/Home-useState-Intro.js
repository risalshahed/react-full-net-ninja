import { useState } from 'react';


const Home = () => {
  // let name = 'anonymous';
  // Array Destructuring
  // const [] = useState('anonymous');
  // VVI here, name, setName, age, setAge ALL are FUNCTIONS!
  const [name, setName] = useState('anonymous');
  const [age, setAge] = useState('NaN');
  // now, it's reactive! button a click korle, name (anonymous) update hbe & handleClick funtion FIRE hoye setName (Risal) show krbe

  const handleClick = () => {
    setName('Risal');
    setAge(30);
  }
  return (
    <>
      <div className="home">
        <h2>Homepage</h2>
        <p>{ name } is { age } years old</p>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </>
  );
}
 
export default Home;