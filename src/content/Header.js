import React from 'react';
import Slide from '@material-ui/core/Slide';

export default function Header(props) {
    let headStyle={
        backgroundImage: 'url(' + '../city.jpg' + ')'
    }

    return (
        <div className="header">
            {/* <Slide direction="right" in="÷true" timeout={{enter:1000}}> */}
                <div className="header-img" style={headStyle}>
                </div>
            {/* </Slide> */}
            <Slide direction="left" in="true" timeout={{enter:1000}}>
                <div className="header-text">
                    <h1 className="fancy">Sheamus Heikkila</h1>
                    <h2>Full Stack Software Engineer</h2>
                </div>
            </Slide>
        </div>
    )
}