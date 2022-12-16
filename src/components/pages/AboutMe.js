import React from 'react';
import css from '../../index.css';

export default function AboutMe() {
  return (
    <div className="about-me">
      <h1>Meet the Creator</h1> 
      <div className='selfieContainer'><img className="selfie border" src={require("../../assets/selfie1.jpg")} alt="author"/>
      </div>
      <p className='about-paragraph'>
        My name is Jimmy. I was born in New York, but have called Utah my home 
        for many years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum
      </p>
    </div>
  );
}