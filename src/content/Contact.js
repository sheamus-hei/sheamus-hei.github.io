import React from 'react';
import Octicon, {Mail, Person, Inbox, MarkGithub} from '@primer/octicons-react'

export default function Contact(props) {
    return (
        <nav>
            <ul>
                <li alt="email">
                    <Octicon icon={Mail} /><div className="spacer"></div>
                    sheamushei@gmail.com
                </li>
                <li>
                    <Octicon icon={Person} /><div className="spacer"></div>
                    <a href="https://www.linkedin.com/in/sheamushei/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
                <li alt="github">
                    <Octicon icon={MarkGithub} /><div className="spacer"></div>
                    GitHub: <div className="spacer"></div>
                    <a href="https://github.com/sheamus-hei" target="_blank" rel="noopener noreferrer">sheamus-hei</a>
                </li>
                <li>
                    <Octicon icon={Inbox} /><div className="spacer"></div>
                    <a href="https://www.dropbox.com/scl/fi/xuz6kj30jkmb8psje3orq/Sheamus-Heikkila-September-2024.pdf?rlkey=7s4j1bkq65crh8ty64iay7mi4&st=qu4fofd9&dl=0" target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    )
}