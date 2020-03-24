import React from 'react';
// import { Link } from 'react-router-dom';

function Home(){

  let imageArray = ['(51, 17, 17, .01)', '(51, 45, 17, .01)', '(19, 14, 35, .01)', '(14, 41, 14, .01)'];
  let imageNumber = (Math.round(Math.random()*3));

  return (
    <div className='Home-body'>


      <h1 className=''>Hello! My name is Noah Horwitz and I'm a full-stack developer.</h1>

<div>
<h2>Navigation:</h2>
</div>


      <style>{`
      .Home-body {
        background: rgba${imageArray[imageNumber]};
        background: linear-gradient(180deg, rgba(0,0,255,0.33) 0%, rgba${imageArray[imageNumber]} 1%, rgba${imageArray[imageNumber]} 99%, rgba(255,0,0,0.33) 100%);
        border-radius: 5vw;
        overflow: auto;
        height: 100%;
        padding-left: 5vw;
        padding-right: 5vw;
        animation: div_animation_effect 2s 1;
      }

      @keyframes div_animation_effect {
              0%   { opacity: 1; transform:matrix(0.01,-0.30,0.33,0.01,${((imageNumber+1)*300)},-${((imageNumber+1)*300)});}
              45%   { opacity: 1; transform:matrix(1.00,0.00,0.00,1.00,${((imageNumber+1)*33)},${((imageNumber+1)*33)});}
              100% { opacity: 1;}
      }



      `}</style>





    </div>
  );
}




export default Home;
