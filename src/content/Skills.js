import React from 'react';

// import SkillPic from './SkillPic';

export default function Skills(props) {
    let skillList = props.skills.skills.map(skill => {
        return (<p>{skill}</p>)
    });
    let skillPics = props.skills.pics.map(pic => {
        return <img src={pic} className="skill-pic" />
    });
    
    return (
        <div className="section skills">
            <div>
                <h1 className="fancy proj-title">Skills</h1>
                <div className="skill-text">
                    <div className="skill-list">{skillList}</div>
                    <div className="skill-list">{skillPics}</div>
                </div>
            </div>
        </div>
    )
}