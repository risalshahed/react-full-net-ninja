const Home = () => {
  let name = 'anonymous';

  const handleClick = () => {
    name = 'Risal';
    // console.log(name);
    // outputs 'Risal'; but mot updated in buttonClick cz it's not reactive yet! we need useState hook to make it reactive!
  }
  return (
    <>
      <div className="home">
        <h2>Homepage</h2>
        <p>{ name }</p>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </>
  );
}
 
export default Home;