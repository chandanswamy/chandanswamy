import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { IoLogoPython } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiSqlite } from 'react-icons/si';

import './index.css';

const Skills = () => {
  const skillsList = [
    {
      linkItem: 'PEVHLMTRXV.pdf',
      iconItem: <AiOutlineHtml5 className='skill-icon' style={{color: '#d50000'}} />,
      skillName: 'HTML5',
    },
    {
      linkItem: 'IINZYRFELJ.pdf',
      iconItem: <FaCss3Alt className='skill-icon' style={{color: '#d7de1d'}} />,
      skillName: 'CSS',
    },
    {
      linkItem: 'OIBEOOEABU.pdf',
      iconItem: <FaBootstrap className='skill-icon' style={{color: '#0f60d9'}} />,
      skillName: 'Bootstrap',
    },
    {
      linkItem: 'VWXIZWMCNY.pdf',
      iconItem: <IoLogoPython className='skill-icon' style={{color: '#0b6129'}} />,
      skillName: 'Python',
    },
    {
      linkItem: 'XRJCVWWMQV.pdf',
      iconItem: <IoLogoJavascript className='skill-icon' style={{color: '#753c20'}} />,
      skillName: 'JavaScript',
    },
    {
      linkItem: 'UEUIXIUHDA.pdf',
      iconItem: <BsGithub className='skill-icon' style={{color: '#000000'}} />,
      skillName: 'Git/Linux',
    },
    {
      linkItem: 'SNCQMPBYZJ.pdf',
      iconItem: <FaNodeJs className='skill-icon' style={{color: '#7bd92e'}} />,
      skillName: 'Node.js',
    },
    {
      linkItem: 'PEVHLMTRXV.pdf',
      iconItem: <FaReact className='skill-icon' style={{color: '#41cff2'}} />,
      skillName: 'React.js',
    },
    {
      linkItem: 'RXCTRLMHUK.pdf',
      iconItem: <SiSqlite className='skill-icon' style={{color: '#e08312'}} />,
      skillName: 'SQL',
    },
  ];

  return (
    <div className='skills-section'>
      {skillsList.map((skill, index) => (
        <div className='each-skill-card' key={index}>
          <Link to={skill.linkItem} target='_blank' className='skill-icon-link'>
            {skill.iconItem}
          </Link>
          <p className='skill-icon-desc'>{skill.skillName}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
