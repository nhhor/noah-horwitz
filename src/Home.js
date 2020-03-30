import React from 'react';
// import { Link } from 'react-router-dom';

function Home(){

  let imageArray = ['51, 17, 17', '51, 45, 17', '19, 14, 35', '14, 41, 14'];
  let imageNumber = (Math.round(Math.random()*3));

  return (
    <div className='Home-index'>

      <h1 className='hello'>Hello! My name is Noah Horwitz.</h1>

      <div className='theTable'>
        <div className='who'>
          <h3>Who I am:</h3>
          <h4>I’m a software development intern at <a href='https://www.eyecuelab.com/'>EyeCue Lab</a> in Portland, OR who's passionate about code and ready to add value to your team!</h4>
        </div>

        <div className='what'>
          <h3>What I know today:</h3>


          <div className='whatList'>
            <div className='whatItem'><img className='icon' src='icon_JavaScript.png' alt='JavaScript Icon'/>JavaScript</div>
            <div className='whatItem'><img className='icon' src='icon_React.png' alt='React Icon'/>React</div>
            <div className='whatItem'><img className='icon' src='icon_Redux.png' alt='Redux Icon'/>Redux</div>
            <div className='whatItem'><img className='icon' src='icon_jQuery.png' alt='jQuery Icon'/>jQuery</div>
            <div className='whatItem'><img className='icon' src='icon_Ruby.png' alt='Ruby Icon'/>Ruby</div>
            <div className='whatItem'><img className='icon' src='icon_Rails.png' alt='Rails Icon'/>Rails</div>
            <div className='whatItem'><img className='icon' src='icon_PostgreSQL.png' alt='pSQL Icon'/>pSQL</div>
            <div className='whatItem'><img className='icon' src='icon_html5.png' alt='html5 Icon'/>HTML5</div>
            <div className='whatItem'><img className='icon' src='icon_css.png' alt='css Icon'/>CSS3</div>
          </div>

        </div>

        <div className='where'>
          <h3>Where I fit on your team:</h3>

          <h4>{`I'm analytical, I love creating, and I have a craving to know more. I'm intrigued with the unique qualities of each person and I recognize and appreciate what I can learn from them.`}</h4>
        </div>

        <div className='contact'>
          <h3>Contact Me:</h3>
          <h4><a href='mailto:nhhor@post.com'>E-mail</a></h4>
          <h4><a href='https://www.LinkedIn.com/in/noah-horwitz'>LinkedIn</a></h4>
          <h4><a href='https://GitHub.com/nhhor'>GitHub</a></h4>
        </div>



      </div>





      <style>{`
          .icon {
            width: 50%;
            max-width: 70px;

            margin-right: 10px;
            border-radius: 25%;
          }


          .who {
            flex: 1 1 400px;
            // max-width: 600px;
            border-radius: 1vw;
            margin: 10px;
            padding: 10px;
            border-radius: 1vw;
            background-color: rgba(${imageArray[imageNumber]+',.09'});
            box-shadow: 10px 10px 10px rgba(0, 0, 0, .33);
          }

          .what {
            flex: 2 1 400px;
            // max-width: 400px;
            border-radius: 1vw;
            margin: 10px;
            padding: 10px;
            border-radius: 1vw;
            background-color: rgba(${imageArray[imageNumber]+',.09'});
            box-shadow: 10px 10px 10px rgba(0, 0, 0, .33);
          }

          .whatList {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: flex-end;
            align-content: flex-start;
          }

          .whatItem {
            flex: 1 1 150px;
            padding-right: 5px;
            padding-left: 5px;
            padding-bottom: 20px;

          }

          .what > ul {
            text-align: left;
            position: relative;
            left: 30%;
          }

          .where {
            flex: 1 1 400px;
            // max-width: 600px;
            border-radius: 1vw;
            margin: 10px;
            padding: 10px;
            border-radius: 1vw;
            background-color: rgba(${imageArray[imageNumber]+',.09'});
            box-shadow: 10px 10px 10px rgba(0, 0, 0, .33);
          }

          .contact {
            flex: 2 1 400px;
            max-width: 100%;
            border-radius: 1vw;
            margin: 10px;
            padding: 10px;
            border-radius: 1vw;
            background-color: rgba(${imageArray[imageNumber]+',.09'});
            box-shadow: 10px 10px 10px rgba(0, 0, 0, .33);
          }

          .theTable {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content: space-between;
            padding: 0px 20px;
          }

          .hello {
            padding: 0px 15%;
          }

          .Home-index {

            background-image: url('PaN_I-Bg_${imageNumber}.png');

            background: linear-gradient(180deg, rgba(0,0,255,0.33) 0%, rgba(${imageArray[imageNumber]+',.0'}) 19%, rgba(${imageArray[imageNumber]+',.0'}) 99%, rgba(255,0,0,0.33) 100%);

            background-image: linear-gradient(180deg, rgba(0,0,255,0.33) 0%, rgba(${imageArray[imageNumber]+',.0'}) 19vw, rgba(${imageArray[imageNumber]+',.0'}) 99%, rgba(255,0,0,0.33) 100%), url('PaN_I-Bg_${imageNumber}.png');

            background-size: contain;
            background-repeat: no-repeat;

            border-radius: 5%;
            padding-top: 19vw;
            padding-left: 2vw;
            padding-right: 2vw;
            padding-bottom: 2vw;
            min-height: 86vh;
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
