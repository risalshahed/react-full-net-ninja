import { Link } from "react-router-dom";

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
          {/* <a href="/">Home</a>
          <a href="/create">New Blog</a> */}

          {/* a href tag SERVER a request pathay! but page/component change er kaj react "browser" a e handle krte pare! so, we'll use Link instead of a href */}
          <Link to="/">Home</Link>
          <Link to="/create">New Blog</Link>

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