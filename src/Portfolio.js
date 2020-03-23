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
        description: 'It is a description. A really really really really really really really really really really really really really really really really really really really really really long description.',
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
    let imageArray = ['(51, 17, 17, .01)', '(51, 45, 17, .01)', '(19, 14, 35, .01)', '(14, 41, 14, .01)'];
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


      <style>{`
          .Portfolio-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content: space-between;
          }

          .Portfolio-project {
            flex: 1 1 400px;
            max-width: 600px;
            border-radius: 1vw;
            margin: 10px;
          }

          .Portfolio-body {
            background: rgba${imageArray[imageNumber]};
            background: linear-gradient(180deg, rgba(0,255,0,0.33) 0%, rgba${imageArray[imageNumber]} 1%, rgba${imageArray[imageNumber]} 99%, rgba(255,0,0,0.33) 100%);
            border-radius: 5vw;
            overflow: auto;
            height: 100%;
            padding-left: 5vw;
            padding-right: 5vw;
            animation: div_animation_effect 2s 1;
          }

          @keyframes div_animation_effect {
            0%   { opacity: 1; transform:matrix(0.01,0.30,-0.33,0.01,${((imageNumber+1)*300)},${((imageNumber+1)*300)});}
            45%   { opacity: 1; transform:matrix(1.00,0.00,0.00,1.00,${((imageNumber+1)*33)},${((imageNumber+1)*33)});}
            100% { opacity: 1;}
          }



          `}</style>





      </div>
    );
  }
}



  export default Portfolio;
