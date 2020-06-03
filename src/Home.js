import React from 'react';
// import { Link } from 'react-router-dom';
import icon_JavaScript from './images/icon_JavaScript.png';
import icon_React from './images/icon_React.png';
import icon_Redux from './images/icon_Redux.png';
import icon_jQuery from './images/icon_jQuery.png';
import icon_Ruby from './images/icon_Ruby.png';
import icon_Rails from './images/icon_Rails.png';
import icon_PostgreSQL from './images/icon_PostgreSQL.png';
import icon_html5 from './images/icon_html5.png';
import icon_MaterialUI from './images/icon_MaterialUI.png';
import icon_Bootstrap from './images/icon_Bootstrap.png';
import icon_Sinatra from './images/icon_Sinatra.png';
import icon_css from './images/icon_css.png';

function Home(){

  let imageArray = ['51, 17, 17', '51, 45, 17', '19, 14, 35', '14, 41, 14'];
  let imageNumber = (Math.round(Math.random()*3));

  let backgroundColorArray = ['27, 26, 32, .99', '23, 18, 17, .99', '0, 0, 0, .99', '15, 12, 14, .99'];
  let randomNumber = (Math.round(Math.random()*3));


  return (
    <div className='Home-index'>

      <h1 className='hello'>Hello! My name is Noah Horwitz.</h1>

      <div className='homeTable'>
        <div className='who'>
          <h3>Who I am:</h3>
          <p>I’m a full-stack development intern at <a href='https://www.eyecuelab.com/'>EyeCue Lab</a> in Portland, OR who's passionate about code and eager to continue learning!</p>
          <p>I'm an Oregon native in love with the outdoors.</p>
        </div>

        <div className='whatContainer'>
          <h3>What I know:</h3>

          <div className="whatTable">
            <div className="whatTopic">Languages:</div>
            <div className='whatList'>
              <div className='whatItem'><img className='icon' src={icon_JavaScript} alt='JavaScript Icon'/><br/>JavaScript</div>
              <div className='whatItem'><img className='icon' src={icon_Ruby} alt='Ruby Icon'/><br/>Ruby</div>
              <div className='whatItem'><img className='icon' src={icon_html5} alt='html5 Icon'/><br/>HTML5</div>
              <div className='whatItem'><img className='icon' src={icon_css} alt='css Icon'/><br/>CSS3</div>
            </div>
          </div>

          <div className="whatTable">
            <div className="whatTopic">Libraries:</div>
            <div className='whatList'>
              <div className='whatItem'><img className='icon' src={icon_React} alt='React Icon'/><br/>React</div>
              <div className='whatItem'><img className='icon' src={icon_Redux} alt='Redux Icon'/><br/>Redux</div>
              <div className='whatItem'><img className='icon' src={icon_jQuery} alt='jQuery Icon'/><br/>jQuery</div>
            </div>
          </div>

          <div className="whatTable">
            <div className="whatTopic">Back-end Frameworks:</div>
            <div className='whatList'>
              <div className='whatItem'><img className='icon' src={icon_Rails} alt='Rails Icon'/><br/>Ruby on Rails</div>
              <div className='whatItem'><img className='icon' src={icon_Sinatra} alt='Rails Icon'/><br/>Sinatra</div>
            </div>
          </div>

          <div className="whatTable">
            <div className="whatTopic">Front-end Frameworks:</div>
            <div className='whatList'>
              <div className='whatItem'><img className='icon' src={icon_MaterialUI} alt='Rails Icon'/><br/>Material UI</div>
              <div className='whatItem'><img className='icon' src={icon_Bootstrap} alt='Rails Icon'/><br/>Bootstrap</div>
            </div>
          </div>

          <div className="whatTable">
            <div className="whatTopic">Relational Database Management Systems:</div>
            <div className='whatList'>
              <div className='whatItem'><img className='icon' src={icon_PostgreSQL} alt='pSQL Icon'/><br/>PostgreSQL</div>
            </div>
          </div>

        </div>

        <div className='where'>
          <h3>Where I fit:</h3>

          <p>{`I'm analytical, I love creating, and I have a craving to know more. I'm intrigued with the unique qualities of each person and I recognize and appreciate what I can learn from them.`}</p>
        </div>

        <div className='contact'>
          <h3>Contact Me:</h3>
          <a href='mailto:nhhor@post.com'>E-mail
          </a>{" | "}
          <a href='https://www.LinkedIn.com/in/noah-horwitz'>LinkedIn
          </a>{" | "}
          <a href='https://GitHub.com/nhhor'>GitHub
          </a>
        </div>



      </div>

      <br/>
      <br/>

      <style>{`
          .whatTable {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content: space-between;

            display: flex;
            flex-wrap: wrap;

            border-bottom: 1px dashed rgba(${imageArray[imageNumber]+',.15'});
          }


          .whatTopic {
            flex: 1 5 100px;
            text-align: left !important;
            // font-size: 1rem;
            font-weight: 600;
            // margin-top: 20px;
            // margin-left: 20px;
            padding-top: 10px;
            margin-left: 20px;
            margin-bottom: 10px;
          }

          .icon {
            // width: 100%;
            max-width: 70px;
            max-height: 70px;
            // margin-right: 10px;
            border-radius: 25%;
          }


          .who {
            flex: 1 2 350px;
            // max-width: 600px;
            border-radius: 1vw;
            margin: 10px;
            padding: 10px;
            border-radius: 1vw;
            background-color: rgba(${imageArray[imageNumber]+',.09'});
            box-shadow: 10px 10px 10px rgba(0, 0, 0, .33);
          }

          .whatContainer {
            flex: 3 1 500px;
            // max-width: 400px;
            margin: 10px;
            padding: 10px;
            border-radius: 1vw;
            background-color: rgba(${imageArray[imageNumber]+',.09'});
            box-shadow: 10px 10px 10px rgba(0, 0, 0, .33);
          }

          .whatList {
            flex: 5 1 auto;


            display: flex;
            flex-wrap: wrap;
            // justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right;
            justify-content: flex-end;
            align-items: flex-end;
            align-content: flex-end;
            // text-align: right;

          }

          .whatItem {
            flex: 1 1 80px;
            padding-right: 5px;
            padding-left: 5px;
            padding-bottom: 10px;
            padding-top: 10px;
            // text-align: right;
            align-self: flex-end;
          }



          .what > ul {
            text-align: left;
            position: relative;
            left: 30%;
          }

          .where {
            flex: 1 2 350px;
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

          .homeTable {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content: space-between;
            // padding: 0px 20px;
          }

          .hello {
            // padding: 0px 150px;
          }

          .Home-index {
            background: linear-gradient(180deg, rgba(${backgroundColorArray[randomNumber]}) 0%, rgba(${imageArray[imageNumber]+',.00'}) 1%, rgba(${imageArray[imageNumber]+',.00'}) 99%, rgba(${backgroundColorArray[randomNumber]}) 100%);

            min-height: 100%;
            padding: 0vh 5vw;
            overflow: hidden;

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
