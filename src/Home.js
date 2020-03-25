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
          <ul>
            <li><img className='icon' src='icon_JavaScript.png'/>JavaScript</li>
            <ul>
              <li><img className='icon' src='icon_React.png'/>React</li>
              <li><img className='icon' src='icon_Redux.png'/>Redux</li>
              <li><img className='icon' src='icon_jQuery.png'/>jQuery</li>
            </ul>
            <li><img className='icon' src='icon_Ruby.png'/>Ruby</li>
            <ul>
              <li><img className='icon' src='icon_Rails.png'/>Rails</li>
            </ul>
            <li><img className='icon' src='icon_PostgreSQL.png'/>pSQL</li>
          </ul>
          <h3>What I hope to learn next:</h3>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li><em>What your team <br/>needs the most.</em></li>
            </ul>
        </div>

        <div className='where'>
          <h3>Where I fit on your team:</h3>

          <h4>{`I'm analytical, I love creating, and I have a craving to know more. I'm intrigued with the unique qualities of each person and I recognize and appreciate what I can learn from them.`}</h4>
        </div>
      </div>





      <style>{`
          .icon {
            max-width: 10%;
            margin-right: 10px;
            border-radius: 25%;
          }


          .who {
            flex: 1 1 400px;
            max-width: 600px;
            border-radius: 1vw;
            margin: 1%;
            padding: 10px;
            border-radius: 1vw;
            background-color: rgba(${imageArray[imageNumber]+',.09'});
            box-shadow: 10px 10px 10px rgba(0, 0, 0, .33);
          }

          .what {
            flex: 1 1 400px;
            max-width: 600px;
            border-radius: 1vw;
            margin: 1%;
            padding: 10px;
            border-radius: 1vw;
            background-color: rgba(${imageArray[imageNumber]+',.09'});
            box-shadow: 10px 10px 10px rgba(0, 0, 0, .33);
          }

          .what > ul {
            text-align: left;
            position: relative;
            left: 30%;
          }

          .where {
            flex: 1 1 400px;
            max-width: 600px;
            border-radius: 1vw;
            margin: 1%;
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
            background: rgba(${imageArray[imageNumber]+',.03'});
            background: linear-gradient(180deg, rgba(0,0,255,0.33) 0%, rgba(${imageArray[imageNumber]+',.03'}) 1%, rgba(${imageArray[imageNumber]+',.03'}) 99%, rgba(255,0,0,0.33) 100%);
            border-radius: 5%;
            padding: 2vh;
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
