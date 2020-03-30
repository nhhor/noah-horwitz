import React from 'react';
import Project from './Project';
// import { Link } from 'react-router-dom';

class Portfolio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projectList: [{
        id: 0,
        name: 'Prioritacts',
        description: "A web-app that securely & seamlessly connects with your Google Contacts, allows a user to set a desired frequency which they wish to communicate with a contact, then a user can log their most recent interaction, and sort the user's contacts by priority since last interaction.",
        picPreview: 'prioritactsPreview.png',
        picHover: 'https://raw.githubusercontent.com/nhhor/prioritacts/master/public/appExample.gif',
        technologiesUsed: ['React', 'Redux', 'OAuth', 'JavaScript'],
        modifiedLast: '2020-03-20',
        linkGitHub: 'https://github.com/nhhor/prioritacts',
        linkDeployed: 'https://prioritacts.netlify.com/',
      },
      {
        id: 1,
        name: 'Neighborly',
        description: "The project is designed to allow neighbors within a community (as defined by a radius within a user's home zip-code area) to host or join events in their immediate area. [Team project]",
        picPreview: 'neighborlyPreview.png',
        picHover: 'neighborlyHover.png',
        technologiesUsed: ['Ruby', 'Rails', 'SQL'],
        modifiedLast: '2020-02-20',
        linkGitHub: 'https://github.com/nhhor/neighborly',
        linkDeployed: 'https://team-neighborly.herokuapp.com/',
      },
      {
        id: 2,
        name: 'Code Invaders',
        description: 'Game designed to practice typing common code elements through an interactive space-themed setting. [Team project]',
        picPreview: 'codeInvedersPreview.png',
        picHover: 'codeInvedersHover.png',
        technologiesUsed: ['JavaScript', 'CSS Animations'],
        modifiedLast: '2020-03-20',
        linkGitHub: 'https://raw.githubusercontent.com/nhhor/prioritacts/master/public/appExample.gif',
        linkDeployed: 'https://nhhor.github.io/code-invaders/',
      },
      {
        id: 3,
        name: 'React Tap Room',
        description: 'The project is designed to create a tap room app in React where a bar or kombucha store can track their kegs.',
        picPreview: 'reactTapRoomPreview.png',
        picHover: 'reactTapRoomHover.png',
        technologiesUsed: ['React', 'DOM manipulation'],
        modifiedLast: '2020-03-20',
        linkGitHub: 'https://github.com/nhhor/react-tap-room',
        linkDeployed: 'https://nhhor.github.io/react-tap-room/index.html',
      },
      {
        id: 4,
        name: 'Pandemic',
        description: 'A timed game that resembles some of the aspects of the popular board game, Pandemic.',
        picPreview: 'pandemicPreview.png',
        picHover: 'pandemicHover.png',
        technologiesUsed: 'JavaScript',
        modifiedLast: '2020-03-20',
        linkGitHub: 'https://github.com/nhhor/pandemic',
        linkDeployed: 'https://nhhor.github.io/pandemic',
      },],
      projectFocus: null
    };
  }

  render() {
    let imageArray = ['51, 17, 17', '51, 45, 17', '19, 14, 35', '14, 41, 14'];
    let imageNumber = (Math.round(Math.random()*3));

    return (
      <div className='Portfolio-body'>

        <h1 className=''>Portfolio</h1>

        <div className='Portfolio-list'>

          {this.state.projectList.map((project) =>
            <Project name={project.name}
              modifiedLast={project.modifiedLast}
              technologiesUsed={project.technologiesUsed}
              picPreview={project.picPreview}
              picHover={project.picHover}
              linkGitHub={project.linkGitHub}
              linkDeployed={project.linkDeployed}
              description={project.description}
              id={project.id}
              key={project.id}/>
          )}

          <div className='contact'>
            <h3 className='projectName'>Contact Me:</h3>
            <h4><a href='mailto:nhhor@post.com'>E-mail</a></h4>
            <h4><a href='https://www.LinkedIn.com/in/noah-horwitz'>LinkedIn</a></h4>
            <h4><a href='https://GitHub.com/nhhor'>GitHub</a></h4>
          </div>

        </div>

        <style>{`
            .projectName{
              padding: 10px;
              margin: 0px;

              font-weight: bolder;
              border-top-right-radius: 1vw;
              border-top-left-radius: 1vw;
              background-color: rgba(64,64,255,0.99);
              overflow: hidden;
              animation: projectName_animation_effect 2s 2;
            }



          .contact {
            flex: 1 1 400px;
            max-width: 600px;
            border-radius: 1vw;
            margin: 10px;
            background-color: rgba(${imageArray[imageNumber]+',.33'});
            box-shadow: 10px 10px 10px rgba(0, 0, 0, .33);
          }

            .Portfolio-body {
              background: rgba(${imageArray[imageNumber]+',.00'});
              background: linear-gradient(180deg, rgba(0,0,255,0.33) 0%, rgba(${imageArray[imageNumber]+',.00'}) 1%, rgba(${imageArray[imageNumber]+',.00'}) 99%, rgba(255,0,0,0.33) 100%);
              border-radius: 5%;
              padding: 2vh;
              min-height: 86vh;
              animation: div_animation_effect 2s 1;
            }

            .Portfolio-list {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
              align-content: space-between;
            }

            @keyframes div_animation_effect {
              0%   { opacity: 1; transform:matrix(0.01,0.30,-0.33,0.01,${((imageNumber+1)*300)},${((imageNumber+1)*300)});}
              45%  { opacity: 1; transform:matrix(1.00,0.00,0.00,1.00,${((imageNumber+1)*33)},${((imageNumber+1)*33)});}
              100% { opacity: 1;}
            }

            `}</style>

        </div>
      );
    }
  }

  export default Portfolio;
