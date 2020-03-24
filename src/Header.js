import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  let imageArray = ['(51, 17, 17, .10)', '(51, 45, 17, .10)', '(19, 14, 35, .10)', '(14, 41, 14, .10)'];
  let imageNumber = (Math.round(Math.random()*3));

  return (

    <div className="Header-body">

      <div className="Header-padding"></div>
      <div className="">Noah Horwitz</div>
      <div className=""><Link to="/">Home</Link> | <Link to="/portfolio">Portfolio</Link></div>
      <div className="Header-padding"></div>

      <style>{`

          .Header-body {
            // overflow: auto;
            background-color: rgba${imageArray[imageNumber]};
            border-bottom-left-radius:  5vw;
            border-bottom-right-radius: 5vw;
            height: 100%;
            animation: header_fade_effect 60s infinite;
          }

          .Header-padding {
            padding: 7px;
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
