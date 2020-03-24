import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  let imageArray = ['51, 17, 17', '51, 45, 17', '19, 14, 35', '14, 41, 14'];
  let imageNumber = (Math.round(Math.random()*3));

  return (

    <div className="Header-body">

      <div className="Header-padding"></div>
      <div className="name">Noah Horwitz</div>
      <div className="name"><Link to="/">Home</Link> | <Link to="/portfolio">Portfolio</Link></div>
      <div className="Header-padding"></div>

      <style>{`

          .Header-body {
            background: rgba${imageArray[imageNumber]};
            background: linear-gradient(180deg, rgba(${imageArray[imageNumber]+',.33'}) 0%, rgba(${imageArray[imageNumber]+',.33'}) 66%, rgba(${imageArray[imageNumber]+',.03'}) 100%);
            border-bottom-left-radius:  5vw;
            border-bottom-right-radius: 5vw;
            height: 100%;
            animation: header_fade_effect 60s infinite;
          }

          .Header-padding {
            padding: 7px;
          }

          .name {
            font-weight: bolder;
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
