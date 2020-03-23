import React from 'react';
// import { Link } from 'react-router-dom';

function Footer(){

  let imageArray = ['(51, 17, 17, .33)', '(51, 45, 17, .33)', '(19, 14, 35, .33)', '(14, 41, 14, .33)'];
  let imageNumber = (Math.round(Math.random()*3));

  return (

      <div className="Footer-body">
        <p>Hi</p>
      <style>{`
          .Footer-body {
            overflow: auto;
            background-color: rgba${imageArray[imageNumber]};
            border-top-left-radius:  10vw;
            border-top-right-radius: 10vw;
            animation: footer_fade_effect 60s infinite;
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
