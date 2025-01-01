import React, { useEffect, useState } from 'react';
import logo from '../../imgs/logo.png';
import { Link } from 'react-router-dom';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';

function Header() {
  const [pop, setPop] = useState(false);
  const fire = () => {
    setPop(!pop);
  };
  return (
    <div className="header">
      <div className="container head-row">
        <div className="head-box">
          <Link to={'https://beautiful-new-york.netlify.app/'}>
            <img src={logo} alt="there is a img" />
          </Link>
          <i class={pop ? 'bx bx-x' : 'bx bx-menu'} onClick={() => setPop(!pop)}></i>
        </div>
        <div className={pop ? 'head-box2 active' : 'head-box2'} onClick={fire}>
          <Link className="head-link" to={'/'}>
            home
          </Link>
          <Link className="head-link" to={'/not'}>
            service
          </Link>
          <Link className="head-link" to={'/not'}>
            pricing
          </Link>
          <Link className="head-link" to={'/not'}>
            contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
