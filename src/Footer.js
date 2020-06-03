import React from 'react';
// import { Link } from 'react-router-dom';

function Footer(){

  let imageArray = ['51, 17, 17', '51, 45, 17', '19, 14, 35', '14, 41, 14'];
  let imageNumber = (Math.round(Math.random()*3));

  let backgroundColorArray = ['27, 26, 32, .99', '23, 18, 17, .99', '0, 0, 0, .99', '15, 12, 14, .99'];
  let randomNumber = (Math.round(Math.random()*3));


  return (

      <div className="Footer-body">
        <div className='Header-padding'>© Noah Horwitz</div>
      <style>{`
          .Footer-body {
            background: rgba(${backgroundColorArray[randomNumber]});
            // background: linear-gradient(180deg, rgba(${imageArray[imageNumber]+',.03'}) 0%, rgba(${imageArray[imageNumber]+',.33'}) 23%, rgba(${imageArray[imageNumber]+',.33'}) 100%);
            height: 100%;

            color: white;
            font-size: .75em;

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
