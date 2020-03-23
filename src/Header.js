import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  let imageArray = ['(51, 17, 17, .33)', '(51, 45, 17, .33)', '(19, 14, 35, .33)', '(14, 41, 14, .33)'];
  let imageNumber = (Math.round(Math.random()*3));

  return (

    <div className="Header-body">

      <div className="Header-padding"></div>
      <div className="">Noah Horwitz</div>
      <div className=""><Link to="/">Home</Link> | <Link to="/portfolio">Portfolio</Link></div>
      <div className="Header-padding"></div>

      <style>{`

          .Header-body {
            overflow: auto;
            background-color: rgba${imageArray[imageNumber]};
            border-bottom-left-radius:  10vw;
            border-bottom-right-radius: 10vw;
            animation: header_fade_effect 60s infinite;
          }

          .Header-padding {
            padding: 10px;
          }

          @keyframes header_fade_effect {
            0%   { opacity: 0; }
            5%   { opacity: 1; }
            100% { opacity: 1; }
          }

          `}</style>
      </div>

    );
  }



  export default Header;
