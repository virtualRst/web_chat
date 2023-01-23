import React from 'react';
import Header from '../Component/Header';

function Chat(props) {
    const newChat=()=>{

    }
    const sendChat=()=>{
        
    }
    return (
        <div className='chat-body'>
            <section class="msger">
                <header class="msger-header">
                    <div class="msger-header-title">
                        <i class="fas fa-comment-alt"></i>
                        <a>MakeMyFriend</a>
                    </div>
                    <div class="msger-header-options">
                        <span><i class="fas fa-cog"></i>
                            <a href="/">Home</a>
                            <a href="/chat"> NewChat</a>
                        </span>
                    </div>
                </header>
                <div class="msger-chat">
                    <div class="msg left-msg">
                        <div class="msg-img"></div>
                        <div class="msg-bubble">
                            <div class="msg-info">
                                <div class="msg-info-name">BOT</div>
                                <div class="msg-info-time">12:45</div>
                            </div>
                            <div class="msg-text">
                                Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
                            </div>
                        </div>
                    </div>

                    <div class="msg right-msg">
                        <div class="msg-img"></div>
                        <div class="msg-bubble">
                            <div class="msg-info">
                                <div class="msg-info-name">Sajad</div>
                                <div class="msg-info-time">12:46</div>
                            </div>
                            <div class="msg-text">
                                You can change your name in JS section!
                            </div>
                        </div>
                    </div>
                </div>
                <form class="msger-inputarea">
                    <button onClick={newChat} type="submit" class="msger-send-btn">NewChat</button>
                    <input type="text" class="msger-input" placeholder="Enter your message..." />
                    <button onClick={sendChat} type="submit" class="msger-send-btn">Send</button>
                </form>
            </section>
        </div>
    );
}

export default Chat;