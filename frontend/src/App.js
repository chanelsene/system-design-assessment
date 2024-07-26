import { Link, Outlet } from 'react-router-dom';
import './App.css';

import logo from './assets/logo.jpeg';

function App() {
  const session = JSON.parse(window.sessionStorage.getItem('react-youtube'));
  if(!session) {
    window.sessionStorage.setItem('react-youtube', JSON.stringify([]));
  }
  return (
    <>
      <div className='header'>
        <div className='header-logo'>
          <Link to='/'>
            <img scr={logo} alt='Youtube logo'/>
          </Link>
          <Link to='/'>
            <h2 className='header-text'>YouTube</h2>
          </Link>
        </div>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
