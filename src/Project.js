import React from 'react';

function Project(props){

  let imageArray = ['51, 17, 17', '51, 45, 17', '19, 14, 35', '14, 41, 14'];
  let imageNumber = (Math.round(Math.random()*3));

  return (
    <div className='Portfolio-list-item'>
      <div id={'project_' + props.id} className='Portfolio-project'>
        <div className={'projectHighlight_' + props.id}>
          <div className={'projectName_' + props.id + ' projectName'}>{props.name}</div>
          <div className={'projectPicPreview_' + props.id}></div>
          <div className='projectDescription'>{props.description}</div>
        </div>
        <div></div>
        <div></div>
        <div className='projectTechnologiesUsed'>Technologies Used: {props.technologiesUsed}</div>
        <div className='projectLinkGitHub'>
          <a className='projectPill' href={props.linkGitHub}>GitHub Repository</a>
          <a className='projectPill' href={props.linkDeployed}>Deployed</a>
        </div>
        <div className='projectModifiedLast'></div>
      </div>

      <style>{`
          .projectPill {
            background: rgba${imageArray[imageNumber]};
            background: linear-gradient(90deg, rgba(${imageArray[imageNumber]+',.33'}) 0%, rgba(${imageArray[imageNumber]+',.33'}) 66%, rgba(${imageArray[imageNumber]+',.33'}) 100%);
            // padding-left: 10px;
            padding: 5px 10px;
            margin: 0px 3%;
            border-radius: 5px;
            font-size: 0.8em;
            box-shadow: 1px 1px 2px rgba(0, 0, 0, .99);
          }

          .Portfolio-list-item {
            flex: 1 1 400px;
            max-width: 600px;
            border-radius: 1vw;
            margin: 10px;
          }

          .Portfolio-project {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 50px 200px 0px repeat(3, 25px);
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            box-shadow: 10px 10px 10px rgba(0, 0, 0, .33);
            border-radius: 1vw;
            background-color: rgba(${imageArray[imageNumber]+',.33'});
          }

          .${'projectHighlight_' + props.id} > .${'projectPicPreview_' + props.id} {
            height: 200px;
            background-image: url(${props.picPreview});
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
          }

          .${'projectHighlight_' + props.id}:hover > .${'projectPicPreview_' + props.id} {
            z-index: 3;
            background-image: url(${props.picHover});
            animation: projectPicPreview_animation_effect 19s 1;
          }

          @keyframes projectPicPreview_animation_effect {
            0%   { opacity: .1;}
            5%   { display: block; position: absolute; top: 30%; right: 25vw; height: 50vh; width: 50vw; opacity: 1; box-shadow: 0px 0px 200px rgba(0, 0, 0, .99); background-color: rgba(${imageArray[imageNumber]+',.97'})}
            95%  { display: block; position: absolute; top: 30%; right: 25vw; height: 50vh; width: 50vw; opacity: 1; box-shadow: 0px 0px 200px rgba(0, 0, 0, .99); background-color: rgba(${imageArray[imageNumber]+',.97'})}
            100% { opacity: 1;}
          }

          .projectDescription {
            opacity: 0;
            display: none;
          }

          .${'projectHighlight_' + props.id}:hover > .projectDescription {
            z-index: 1;
            color: rgba(0, 0, 0, 0.00);
            display: block;

            padding: 1%;
            border-bottom-left-radius: 1vw;
            border-bottom-right-radius: 1vw;
            animation: projectDescription_animation_effect 19s 1;
          }

          @keyframes projectDescription_animation_effect {
            0%   { opacity: 1; color: rgba(255, 255, 255, 1); z-index: 4;}
            5%   { opacity: 1; display: block; position: absolute; top: 80vh; right: 25vw; background-color: rgba(${imageArray[imageNumber]+',.97'}); color: rgba(255, 255, 255, 1); width: 48vw; height: 99px; z-index: 4;}
            95%  { opacity: 1; display: block; position: absolute; top: 80vh; right: 25vw; background-color: rgba(${imageArray[imageNumber]+',.97'}); color: rgba(255, 255, 255, 1); width: 48vw; height: 99px; z-index: 4;}
            100% { opacity: 1; color: rgba(0, 0, 0, 0.00); z-index: 4;}
          }

          .${'projectName_' + props.id} {
            padding: 10px;
            font-weight: bolder;
            border-top-right-radius: 1vw;
            border-top-left-radius: 1vw;
            background-color: rgba(64,64,255,0.99);
            overflow: hidden;
            animation: projectName_animation_effect ${(props.id+1)}s 2;
          }

          @keyframes projectName_animation_effect {
            0%   { box-shadow: inset 0px 0px 0px rgba(0, 0, 0, .33);}
            ${(props.id+70)}%  { box-shadow: inset 0px 0px 25px rgba(0, 255, 100, .99); background-color: rgba(0, 0, 255, .66);}
            100% { box-shadow: inset 0px 0px 0px rgba(0, 0, 0, .33);}
          }

          .${'projectHighlight_' + props.id}:hover > .projectName {
            z-index: 2;
            padding: 0px;
            padding-top: 10px;
            padding-bottom: 10px;
            animation: projectNameHover_animation_effect 19s 1;
          }

          @keyframes projectNameHover_animation_effect {
            0%   { opacity: 1; color: rgba(255, 255, 255, 1); z-index: 4;}
            5%   { opacity: 1; display: block; position: absolute; top: 26vh; right: 25vw; background-color: rgba(${imageArray[imageNumber]+',.97'}); color: rgba(255, 255, 255, 1); width: 50vw; height: 25px; z-index: 4;}
            95%  { opacity: 1; display: block; position: absolute; top: 26vh; right: 25vw; background-color: rgba(${imageArray[imageNumber]+',.97'}); color: rgba(255, 255, 255, 1); width: 50vw; height: 25px; z-index: 4;}
            100% { opacity: 1; color: rgba(0, 0, 0, 0.00); position: relative; z-index: 4;}
          }

          .projectTechnologiesUsed {
            // background-color: rgba(0,255,0,0.33);
          }

          .projectLinkGitHub {
            // background-color: rgba(0,255,0,0.99);
          }

          .projectLinkDeployed {
            // background-color: rgba(0,255,0,0.99);

          }








          `}</style>
      </div>
    );
  }



  export default Project;
