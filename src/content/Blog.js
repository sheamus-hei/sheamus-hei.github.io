import React from 'react';

export default function Blog(props) {
    let blogStyle = {
        backgroundImage: 'url(' + props.blog.img + ')'
    }

    return (
        <div className="section">
            <div style={blogStyle} className="proj-img">
            </div>
            <div className="proj-text">
                <h2 className="fancy">{props.blog.name}</h2>
                <p>{props.blog.description}</p>
                <div className="proj-links">
                    <a href={props.blog.link} target="_blank" rel="noopener noreferrer">Check it out on Dev.To</a>
                </div>
            </div>
        </div>
    )
}