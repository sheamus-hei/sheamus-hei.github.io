import React from 'react';
import Octicon, {Mail, Person, Inbox, MarkGithub} from '@primer/octicons-react'

export default function Contact(props) {
    return (
        <nav>
            <ul>
                <li alt="email">
                    <Octicon icon={Mail} /><div className="spacer"></div>
                    erikjheikkila@gmail.com
                </li>
                <li>
                    <Octicon icon={Person} /><div className="spacer"></div>
                    <a href="https://www.linkedin.com/in/erik-hei/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
                <li alt="github">
                    <Octicon icon={MarkGithub} /><div className="spacer"></div>
                    GitHub: <div className="spacer"></div>
                    <a href="https://github.com/erik-hei" target="_blank" rel="noopener noreferrer">erik-hei</a>
                </li>
                <li>
                    <Octicon icon={Inbox} /><div className="spacer"></div>
                    <a href="https://www.dropbox.com/s/q6njmfa5zxjk7hz/Erik-Heikkila-Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    )
}