const Navbar = () => {
  const handleClick = (name, e) => {
    console.log(`Hello ${name}`, e.target);
    // console.log('Hello ' + name, e);
  }
  return (
    <>
      <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create">New Blog</a>

          {/* inline style in JSX */}
          {/* <a href="/create" style={{
            color: '#000',
            backgroundColor: '#4df277',
            borderRadius: '8px'
          }}>New Blog</a> */}
          {/* This anonumous function prevents the initial function rendering or call just after the component starts (without even clicked on button) */}
          <button onClick={ (e) => {handleClick('Risal', e)} }>Click Me!</button>
        </div>
      </nav>
    </>
  );
}
 
export default Navbar;