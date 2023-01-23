import React from 'react';

function Header(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"white"}}>
            <a class="navbar-brand" href="#">MakeMyFriend</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/chat">Chat</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;