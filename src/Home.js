import React from 'react';
// import logo from './logo.svg';

import Header from './content/Header';
import Nav from './content/Nav';
import About from './content/About';
import Project from './content/Project';
import Skills from './content/Skills';
import Contact from './content/Contact';

function Home(props) {
  let projects = [
    {
      name: "Frogcraft",
      description: "You’re a little frog in a big world, and the rest is up to you! In this 2D platformer, hop around and flick your tongue to manipulate terrain.",
      tech: "Javascript, CSS, HTML5 Canvas",
      link: "https://erik-hei.github.io/frogcraft/",
      github: "https://github.com/erik-hei/frogcraft",
      img: "./frogcraft.png",
      gif: "./frogcraft.gif"
    },{
      name: "NatureFinder",
      description: "Looking for wildlife in your area? NatureFinder allows you to search for any location worldwide and see animals that were spotted recently nearby.",
      tech: "Express.js, Node.js, PostGreSQL(Sequelize), EJS, HTML, CSS, Bootstrap, Mapbox",
      link: "http://naturefinder.herokuapp.com/",
      github: "https://github.com/erik-hei/nature-finder",
      img: "./naturefinder.png",
      gif: "./naturefinder.gif"
    },{
      name: "No Scroll Recipes",
      description: "Are you tired of scrolling past a food blogger’s life story to get to their recipe? This app is for you. No Scroll is a micro-blogging platform for recipes that limits recipe descriptions to the length of a tweet.",
      tech: "MERN - MongoDB (Mongoose), Express.js, React, Node.js, CSS",
      link: "https://recipe-app-29.herokuapp.com/",
      github: "https://github.com/erik-hei/recipe-app-project3",
      img: "./noscroll.png",
      gif: "./noscroll.gif"
    },{
      name: "Lyrical",
      description: "Now you can create poetry using your favorite song lyrics. Make new poems and then search lyrics from Genius to add fresh phrases to your creations.",
      quote: "“This app sparks joy.” - Sarah King, GA Instructor",
      tech: "Flask (Python), React, PostGreSQL (SQLALchemy), Material-UI, CSS",
      link: "https://erik-hei.github.io/lyrical/",
      github: "https://github.com/erik-hei/lyrical",
      img: "./lyrical.png",
      gif: "./lyrical.png"
    }
  ]

  return (
    <div className="App">
      <header>
        <Header className="header" />
        <Nav />
      </header>
      <main>
        <div id="about">
            <About />
        </div>
        <div id="projects">
            <h1 className="fancy proj-title">Projects</h1>
            <Project project={projects[3]} />
            <Project project={projects[2]} />
            <Project project={projects[1]} />
            <Project project={projects[0]} />
        </div>
        <div id="skills">
            <Skills />
        </div>
      </main>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
