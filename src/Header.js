import React from 'react';
import { Link } from 'react-router-dom';
import PaN_Bg_0 from './images/PaN_I-Bg_0.png';
import PaN_Bg_1 from './images/PaN_I-Bg_1.png';
import PaN_Bg_2 from './images/PaN_I-Bg_2.png';
import PaN_Bg_3 from './images/PaN_I-Bg_3.png';

function Header(){

  let backgroundImageArray = [PaN_Bg_0, PaN_Bg_1, PaN_Bg_2, PaN_Bg_3];
  let backgroundColorArray = ['27, 26, 32, .99', '23, 18, 17, .99', '0, 0, 0, .99', '15, 12, 14, .99'];
  let buttonColorArray = ['27, 26, 128, .85', '23, 18, 128, .85', '0, 0, 128, .85', '15, 12, 128, .85'];
  let randomNumber = (Math.round(Math.random()*3));

  return (

    <div className="Header-body">

      <div className="Header-padding"></div>
      <div className="links">
        <Link to="/"><button className="linkButton">Home</button>
        </Link>
        <Link to="/portfolio"><button className="linkButton">Portfolio</button>
        </Link>
        <Link to="/resume"><button className="linkButton">Resume</button>
        </Link>
      </div>
      <div className="Header-padding"></div>

      <style>{`

          .Header-body {

            background: rgba(${backgroundColorArray[randomNumber]});
            background-image: url(${backgroundImageArray[randomNumber]});
            background-position: bottom center;
            background-repeat: no-repeat;

            height: 100%;

            animation: header_fade_effect 60s infinite;
          }

          .Header-padding {
            padding: 7px;
          }

          .linkButton {
            background-color: rgba(${buttonColorArray[randomNumber]});
            border: none;
            border-radius: 5px;
            width: 125px;
            height: 30px;
            margin: 3px 20px;
            box-shadow: 3px 3px 3px rgba(128, 128, 128, .75);

            font-size: 1.25rem;
            color: white;

          }

          .links {
            position: absolute;
            left: 50%;
            top: 75px;
            transform: translate(-50%, -50%);
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
