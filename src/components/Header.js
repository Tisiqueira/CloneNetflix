import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikipedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="pbs.twing.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário"></img>
                </a>
            </div>
        </header>
    )
}