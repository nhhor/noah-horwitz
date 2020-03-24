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
        technologiesUsed: ['React', 'Redux'],
        modifiedLast: '2020-03-20',
        linkGitHub: 'https://github.com/nhhor/prioritacts',
        linkDeployed: 'https://prioritacts.netlify.com/',
      },
      {
        id: 1,
        name: 'Test',
        description: 'It is a description',
        picPreview: 'https://raw.githubusercontent.com/nhhor/prioritacts/master/public/appExample.gif',
        picHover: 'https://steamcdn-a.akamaihd.net/steam/apps/346110/header.jpg?t=1583178772',
        technologiesUsed: 'React',
        modifiedLast: '2020-03-20',
        linkGitHub: 'https://raw.githubusercontent.com/nhhor/prioritacts/master/public/appExample.gif',
        linkDeployed: 'q',
      },
      {
        id: 2,
        name: 'Test',
        description: 'It is a description',
        picPreview: 'https://raw.githubusercontent.com/nhhor/prioritacts/master/public/appExample.gif',
        picHover: 'https://steamcdn-a.akamaihd.net/steam/apps/346110/header.jpg?t=1583178772',
        technologiesUsed: 'React',
        modifiedLast: '2020-03-20',
        linkGitHub: 'https://raw.githubusercontent.com/nhhor/prioritacts/master/public/appExample.gif',
        linkDeployed: 'w',
      },
      {
        id: 3,
        name: 'Test',
        description: 'It is a description',
        picPreview: 'https://raw.githubusercontent.com/nhhor/prioritacts/master/public/appExample.gif',
        picHover: 'https://steamcdn-a.akamaihd.net/steam/apps/346110/header.jpg?t=1583178772',
        technologiesUsed: 'React',
        modifiedLast: '2020-03-20',
        linkGitHub: 'https://raw.githubusercontent.com/nhhor/prioritacts/master/public/appExample.gif',
        linkDeployed: 'e',
      },
      {
        id: 4,
        name: 'Test',
        description: 'It is a description',
        picPreview: 'https://raw.githubusercontent.com/nhhor/prioritacts/master/public/appExample.gif',
        picHover: 'https://steamcdn-a.akamaihd.net/steam/apps/346110/header.jpg?t=1583178772',
        technologiesUsed: 'React',
        modifiedLast: '2020-03-20',
        linkGitHub: 'https://raw.githubusercontent.com/nhhor/prioritacts/master/public/appExample.gif',
        linkDeployed: 'r',
      },],
      projectFocus: null
    };

  }



  render() {
    let imageArray = ['(51, 17, 17, .10)', '(51, 45, 17, .10)', '(19, 14, 35, .10)', '(14, 41, 14, .10)'];
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

        </div>

        <br/><br/><br/>

        <style>{`
            .Portfolio-list {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
              align-content: space-between;
            }



            .Portfolio-body {
              background: rgba${imageArray[imageNumber]};
              background: linear-gradient(180deg, rgba(0,255,0,0.33) 0%, rgba${imageArray[imageNumber]} 1%, rgba${imageArray[imageNumber]} 99%, rgba(255,0,0,0.33) 100%);
              border-radius: 5vw;
              overflow: auto;
              height: 100%;
              // width: 80%;
              padding-left: 5%;
              padding-right: 5%;
              animation: div_animation_effect 2s 1;
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
