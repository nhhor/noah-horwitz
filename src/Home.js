import React from 'react';
// import { Link } from 'react-router-dom';

function Home(){

  let imageArray = ['(51, 17, 17, .01)', '(51, 45, 17, .01)', '(19, 14, 35, .01)', '(14, 41, 14, .01)'];
  let imageNumber = (Math.round(Math.random()*3));

  return (
    <div className='Home-body'>

      <h1 className=''>Summary</h1>
      <h3 className=''>Lorem ipsum dolor amet mumblecore aesthetic occupy etsy, 8-bit +1 pitchfork celiac gluten-free XOXO. Pitchfork bicycle rights retro, knausgaard vice neutra hella ugh etsy truffaut viral. Letterpress chicharrones offal, next level woke sustainable mlkshk. Snackwave copper mug leggings, sustainable food truck semiotics polaroid schlitz irony austin tilde shaman next level. Distillery etsy thundercats banh mi tattooed unicorn hell of put a bird on it lumbersexual meggings 90's kinfolk. Crucifix wayfarers hot chicken, umami waistcoat art party activated charcoal squid cred tofu gluten-free pabst gastropub. Marfa hella lyft cred quinoa leggings synth.</h3>




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
