import React from 'react';
// import { Link } from 'react-router-dom';

function Footer(){

  let imageArray = ['(51, 17, 17, .10)', '(51, 45, 17, .10)', '(19, 14, 35, .10)', '(14, 41, 14, .10)'];
  let imageNumber = (Math.round(Math.random()*3));

  return (

      <div className="Footer-body">
        <div className='Header-padding'>Hi</div>
      <style>{`
          .Footer-body {
            overflow: auto;
            background-color: rgba${imageArray[imageNumber]};
            border-top-left-radius:  5vw;
            border-top-right-radius: 5vw;
            animation: footer_fade_effect 60s infinite;
          }

          .Header-padding {
            padding: 4px;
          }

          @keyframes footer_fade_effect {
            0%   { opacity: 0; }
            5%   { opacity: 1; }
            100% { opacity: 1; }
          }

          `}</style>
      </div>

    );
  }



  export default Footer;
