import React from 'react';
import Button from 'react-bootstrap/Button';
import draw from '../juan-paulo.jpg';
import resume from '../Resume-Juan-Paulo.pdf';

const Hero = () => (
  <div className='container'>
    <div className='row align-items-center'>
    <div className='col p-5'>
      <h1 className='display-1 border-bottom'>Juan Paulo</h1>
      <h2 className='display-6 text-muted'>Writer &amp; Translator</h2>
      <p className='lead'>
      I studied Linguistics at the National School of Anthropology &amp; History. Since 2015, I have researched and written about science, technology, software development, start-ups, and other tech-related topics. 
      My skillset includes SEO Writing, Storytelling, WordPress, and Google AdWords.
      </p>
      <p>
      <a href={resume} download={`Juan Paulo's Resume`} className="btn btn-outline-secondary">Get my resume</a>
      </p>
    </div>
    <img src={draw} alt='Juan Paulo Perez-Tejada, by Gim Yearin' className='col rounded-circle' />
    </div>
  </div>
);

export default Hero;
