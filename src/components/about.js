import React from "react";
import banner from '../juan-paulo-banner.png';

const About = () => (
  <main className="container">
      <div className="row mb-5">
          <img src={banner} alt='Juan Paulo Banner, Freelance translator and writer. Draw by Gim Yearin' className="img-fluid" />
          <section style={{width:'80%', margin:'auto'}}>
          <h1 className="display-1">About me</h1>
              <p className="lead">Hi! I'm Juan Paulo, but you can call me J.P.. I'm a writer really interested in tech-related news, but I also enjoy writing and translating about other topics, such as science, social issues, or fashion design.</p> <p> I studied Linguistics at the National School of Anthropology and History, and Full-Stack Web Development at Microverse. I'm also bootstrapping an EdTech Startup.</p>
              <p>In 2018, I started writing content in English, and I haven't stopped since then. However, I have written about tech-related topics since 2015 (in Spanish), interviewing Latin American leaders in e-businesses. Before that, I created product descriptions for e-commerces such as Walmart Mexico and Steren, following best SEO practices.</p>
              <p>I consider that good research is the first step for a good article, so I use to consult trustable primary and secondary sources. When it's possible, I interview experts on the subject. As a regular Wikipedia contributor, I sometimes use it as a starting point, but I contrast its sources with other sources.</p>
              <p>If you need content for your website or a good translation (English-Spanish), contact me!</p>
              <div className="d-flex align-items-center justify-content-between"><a href='mailto:maclenn77@gmail.com' className="btn btn-outline-secondary p-2 mr-auto fw-bold">Contact me for your project</a> <p className="text-secondary text-end">I'm also a <a href='http://juanpaulo.xyz' className="text-dark">Full-Stack Web Developer</a>!</p></div>
          </section>
      </div>
  </main>
);
export default About;