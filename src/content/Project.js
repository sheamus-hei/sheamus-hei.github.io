import React from 'react';

export default function Project(props) {
    let projStyle = {
        backgroundImage: 'url(' + props.project.img + ')'
    }
    let gifStyle = {
        backgroundImage: 'url(' + props.project.gif + ')'
    }
    return (
        <div className="section">
            <div style={projStyle} className="proj-img">
                <div style={gifStyle} className="proj-img">
                </div>
            </div>
            <div className="proj-text">
                <h2 className="fancy">{props.project.name}</h2>
                <p>{props.project.description}</p>
                {props.project.quote?<blockquote>{props.project.quote}</blockquote>:""}
                <p><strong>Tech: </strong><span className="tech">{props.project.tech}</span></p>
                <div className="proj-links">
                    <a href={props.project.link} target="_blank">View {props.project.name} live</a>
                    <span className="divider">|</span>
                    <a href={props.project.github} target="_blank">Project GitHub</a>
                </div>
            </div>
        </div>
    )
}