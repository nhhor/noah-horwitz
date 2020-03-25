import React from 'react';
import { Link } from 'react-router-dom';

function Resume(){

  let imageArray = ['51, 17, 17', '51, 45, 17', '19, 14, 35', '14, 41, 14'];
  let imageNumber = (Math.round(Math.random()*3));

  return (
    <div className='Resume-index'>

    <h1 className='resume'>Resume</h1>

    <div className='theTable'>
    <div className='summary'>
    <h3 className='h3Section'>SUMMARY</h3>
    <h4>I’m a developer intern who's passionate about software development and ready to start a career in the tech industry! I believe my detail-oriented nature, customer service experience, and my tech education will make me a great fit on your team!</h4>
    </div>

    <div className='skills'>
      <h3 className='h3Section'>SKILLS</h3>
      <ul>
        <li>Git, pair-programming</li>
        <li>HTML, CSS w/animations</li>
        <li>JavaScript & Object<br/> Oriented design</li>
        <li>Test Driven Development</li>
        <li>Asynchrony and APIs</li>
        <li>Ruby & Ruby on Rails</li>
        <li>React & Redux</li>
        <li>Relational databases (psql)</li>
        <li>Model View Controllers</li>
        <li>Public speaking</li>
      </ul>
    </div>

    <div className='experience'>
      <h3 className='h3Section'>EXPERIENCE</h3>
      <ul>
        <li>Wilson Logistics,  Portland, OR</li>
        <ul>
          <li>Senior Contracts and Claims Specialist    2018 - 2019</li>
        <ul>
          <li>Analyze, evaluate, and interpret customer contracts for risk and coordinate review for affected department managers and corporate legal counsel.</li>
          <li>Facilitate full cycle of auto-liability claims, including: investigation, subrogation, settlement, and retention.</li>
        </ul>
        </ul>

        <ul>
          <li>Claims Administrator    2015 - 2018</li>
        <ul>
          <li>Lead full cycle of auto-liability claims, including: investigation, subrogation, settlement, and retention.</li>
          <li>Primary facilitator for weekly three-day orientation for approximately 300 new drivers. Including creating content and training materials, managing presenter schedules, and guiding through HR onboarding.</li>
        </ul>
        </ul>

        <ul>
          <li>Recruiter    2014 - 2015</li>
        <ul>
          <li>Recruit and onboard over 240 Class-A truck drivers.</li>
          <li>Increased the company's online social media presence by 40% with continued growth over a year.</li>
        </ul>
        </ul>
      </ul>

      <ul>
        <li>Boy Scouts of America, Cascade Pacific Council, Portland, OR</li>
        <ul>
          <li>District Executive    2010 - 2013</li>
        <ul>
          <li>Volunteer coordinator of over 450 volunteers, providing training, coaching, recognition and engagement, campaign management, and regular business/professional communications.</li>
          <li>Managed local fund development campaign and achieved 17.9% above goal.</li>
        </ul>
        </ul>
        </ul>

    </div>


    <div className='education'>
      <h3 className='h3Section'>EDUCATION</h3>
      <ul>
        <li>Epicodus, Portland, OR</li>
        <ul>
          <li>JavaScript, Ruby on Rails, & React program    2019 - Current</li>
          <ul>
            <li>Full-time 27 week program in web and open-source development.</li>
            <li>Primary content includes full web stack technologies such as HTML, CSS, JavaScript, Ruby on Rails, React, database architecture, and behavior driver development.</li>
          </ul>
        </ul>
      </ul>

      <ul>
        <li>University of Oregon, Eugene, OR</li>
        <ul>
          <li>Bachelor of Science    2006 - 2008</li>
        <ul>
          <li>Major in Psychology, minor in Business Administration.</li>
          <li>Activities and Societies: Residence Hall Association</li>
        </ul>
        </ul>
      </ul>

      <ul>
        <li>Portland Community College, Portland, OR</li>
        <ul>
          <li>Associate of Arts    2002 - 2006</li>

        </ul>
      </ul>

    </div>



    <div className='projects'>
      <h3 className='h3Section'>PROJECTS</h3>
        <h4><Link to="/portfolio">Portfolio</Link></h4>

    </div>

    </div>

    <style>{`
      .h3Section {
        color: green;
      }

      .icon {
        max-width: 10%;
        margin-right: 10px;
        border-radius: 25%;
      }


      .summary {
        flex: 1 1 500px;
        max-width: 600px;
        border-radius: 1vw;
        margin: 1%;
        padding: 10px;
        border-radius: 1vw;
        background-color: rgba(${imageArray[imageNumber]+',.09'});
        box-shadow: 10px 10px 10px rgba(0, 0, 0, .33);
      }

      .skills {
        flex: 1 1 400px;
        max-width: 600px;
        border-radius: 1vw;
        margin: 1%;
        padding: 10px;
        border-radius: 1vw;
        background-color: rgba(${imageArray[imageNumber]+',.09'});
        box-shadow: 10px 10px 10px rgba(0, 0, 0, .33);
      }

      .skills > ul {
        text-align: left;
        position: relative;
        left: 20%;
      }

      .experience {
        flex: 1 1 400px;
        max-width: 600px;
        border-radius: 1vw;
        margin: 1%;
        padding: 10px;
        border-radius: 1vw;
        background-color: rgba(${imageArray[imageNumber]+',.09'});
        box-shadow: 10px 10px 10px rgba(0, 0, 0, .33);
      }

      .experience > ul {
        text-align: left;
        position: relative;
        width: 90%;
      }

      .education {
        flex: 1 1 400px;
        max-width: 600px;
        border-radius: 1vw;
        margin: 1%;
        padding: 10px;
        border-radius: 1vw;
        background-color: rgba(${imageArray[imageNumber]+',.09'});
        box-shadow: 10px 10px 10px rgba(0, 0, 0, .33);
      }

      .education > ul {
        text-align: left;
        position: relative;
        width: 90%;
      }

      .projects {
        flex: 1 1 400px;
        max-width: 600px;
        border-radius: 1vw;
        margin: 1%;
        padding: 10px;
        border-radius: 1vw;
        background-color: rgba(${imageArray[imageNumber]+',.09'});
        box-shadow: 10px 10px 10px rgba(0, 0, 0, .33);
      }

      .projects > ul {
        text-align: left;
        position: relative;
        width: 90%;
      }

      .theTable {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-between;
        padding: 0px 20px;
      }

      .resume {
        padding: 0px 15%;
      }

      .Resume-index {
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




  export default Resume;
