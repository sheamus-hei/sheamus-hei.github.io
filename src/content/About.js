import React from 'react';

export default function About(props) {
    let aboutStyle={
        backgroundImage: 'url(' + '../sheamus.jpeg' + ')'
    }
    return (
        <div className="section about">
            <div style={aboutStyle} className="about-image">
            </div>
            <div className="about-text">
                <h1 className="fancy">About</h1>
                <p>
                I am a Seattle-based full-stack developer with a strong technical industrial engineering background. My experience solving a diverse range of engineering problems and knowledge of human factors add to my statistical research background for a full stack mindset. Experience with Javascript, Python, React.js, SQL dialects, and Java. 
                </p>
            </div>
        </div>
    )
}