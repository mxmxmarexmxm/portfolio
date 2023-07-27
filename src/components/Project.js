import React from 'react';
import LogoBadgeContainer from './ui/logo-badge-container';
import githubLogo from '../assets/img/logo/github.png';
import livewebLogo from '../assets/img/logo/liveweb.png';

const Project = (props) => {
  const {
    title,
    name,
    projectImg,
    description,
    liveUrl,
    techs,
    githubUrl,
    noPhoneImg,
  } = props;

  console.log(noPhoneImg);

  return (
    <div className="flex flex-col">
      <div className="text-center font-bold">
        <span className="text-gray-500 bg-black p-2">{title}</span>
        <h2 className="sm:text-5xl text-3xl font-bold">{name}</h2>
      </div>
      <div className="flex justify-center my-4 w-full items-center overflow-hidden">
        <div
          className={`w-9/12  mr-4 sm:mr-6  ${!noPhoneImg ? 'sm:ml-36' : ''}`}
        >
          <img src={projectImg} className="w-full" alt={`pc-${name}`} />
        </div>
      </div>
      <LogoBadgeContainer techs={techs} />
      <div className="flex-1 text-center flex justify-between items-center my-8">
        <div>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={livewebLogo}
              className={`invert h-10 sm:h-20 ${
                !liveUrl ? 'blur-sm cursor-not-allowed' : 'hover:scale-125'
              }`}
              alt={`${name}-live`}
            />
          </a>
        </div>
        <p className="max-w-[50%]">{description}</p>
        <div>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={githubLogo}
              className={`invert h-10 sm:h-20  ${
                !githubUrl ? 'blur-sm cursor-not-allowed' : 'hover:scale-125'
              }`}
              alt={`${name}-github`}
            />
          </a>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Project;
