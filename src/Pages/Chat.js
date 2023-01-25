import React from 'react';
import db from '../Component/Firebase';
import { useEffect } from 'react';
import { startNewChat } from '../Component/CommonFunction';

function Chat(props) {
    const newChat = () => {
        console.log("Hi");
        db.ref('users/rst').set({
            username: "Rishabh",
            email: "test",
            profile_picture: "test"
        });
    }
    const sendChat = () => {
        console.log("Hi2");
        appendMessage("Test", "img", "right", "ABCD");
    }
    useEffect(() => {
        startNewChat();
    });
    const appendMessage = (name, img, side, text) => {
        //   Simple solution for small apps
        const msgHTML = `
          <div class="msg ${side}-msg">
            <div class="msg-img" style="background-image: url(${img})"></div>
      
            <div class="msg-bubble">
              <div class="msg-info">
                <div class="msg-info-name">${name}</div>
                <div class="msg-info-time">${formatDate(new Date())}</div>
              </div>
      
              <div class="msg-text">${text}</div>
            </div>
          </div>
        `;
        let msgerChat = document.querySelector('#msger-chat');
        msgerChat.insertAdjacentHTML("beforeend", msgHTML);
        msgerChat.scrollTop += 500;
    }
    const get = (selector, root = document)=> {
        return root.querySelector(selector);
    }
    const formatDate = (date) => {
        const h = "0" + date.getHours();
        const m = "0" + date.getMinutes();

        return `${h.slice(-2)}:${m.slice(-2)}`;
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
                <div class="msger-chat" id="msger-chat">
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
                <div class="msger-inputarea">
                    <button onClick={newChat} class="msger-send-btn">New</button>
                    <input type="text" class="msger-input" placeholder="Enter your message..." />
                    <button onClick={sendChat} class="msger-send-btn">Send</button>
                </div>
            </section>
        </div>
    );
}

export default Chat;