import React from 'react';

export default function About(props) {
    let aboutStyle={
        backgroundImage: 'url(' + '../erik.jpeg' + ')'
    }
    return (
        <div className="section about">
            <div style={aboutStyle} className="about-image">
            </div>
            <div className="about-text">
                <h2 className="fancy">About</h2>
                <p>
                Industrial Engineer turned full-stack developer. With a strong technical background in manufacturing and engineering, I have experience solving a wide variety of problems. Knowledge of human factors and customer service understanding of front end user experience add to my statistical knowledge and data science research for a full stack development mindset. Experience with Javascript, Java, Python, and SQL dialects. 
                </p>
            </div>
        </div>
    )
}