import React from 'react';
import Header from '../Component/Header';
import { useEffect } from 'react';
import { createUserId} from '../Component/CommonFunction';


function Home(props) {
    useEffect(() => {
        createUserId();
    });
    return (
        <>
            <Header />
            <div class="container">
                <div>
                    <h1>Chat with Random Strangers</h1>
                    <p>Chat with strangers in private chat rooms. Find new friends and date online.</p>
                </div>
                <div className='container_btn'>
                    <div class="vertical-center">
                        <a href="/chat"><button className='btn btn-primary'>Start Chatting With a Friend</button></a>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-sm">
                        <h4>Random Chat Rooms Online</h4>
                        <p>
                            An online live chat is a way to simulate a real-life chat, experienced online. Think of Online chat as a way to talk to people online, almost like a blind date. It's not just for dating, though. Talking to strangers can also be a way to find new friends online.
                        </p>
                        <p>
                            Chat with Strangers from the India. MakeMyFriend is a great place if you want to meet Indians online. Our servers are hosted in the India.
                        </p>
                    </div>
                    <div class="col-sm">
                        <h4>What is MakeMyFriend?</h4>
                        <p>
                            MakeMyFriend is an online, anonymous, and text-based chat app. MakeMyFriend connects you with a stranger and lets the two of you send live text messages to each other. Our chat service lets you text chat with randomly selected people from all over the world in private chat rooms. Using these way you can connect with people who are actually looking out for Friends like you.
                        </p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-sm">
                        <h4>Chat for 2. Chat in private.</h4>
                        <p>
                            MakeMyFriend is a chatting website that tries to fill the gap among social media websites. On Facebook, you mostly chat with people you already know and have met in the physical world. MakeMyFriend on the other hand, aims to help you find new friends.
                        </p>
                        <p>
                            There are two ways to meet new people – chat in one of the group chat rooms or chat in private with a random stranger – either way is great if you want to connect with people.
                        </p>
                    </div>
                    <div class="col-sm">
                        <h4>Chat Anonymously and Free</h4>
                        <p>
                            The chat service is completely anonymous, the stranger you chat with cannot see who you are.
                        </p>
                        <h4>Talk to strangers</h4>
                        <p>
                            A great way to expand your social network is to talk to strangers. MakeMyFriend is an anonymous chat app with online chat rooms. No registration is required in order to use our online chat service. Our chat service is free to use.
                        </p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-sm">
                        <h4>Strangers Are Friends You Just Have Not yet Met</h4>
                        <p>
                        There is a saying that strangers are friends you just not yet have met. To chat with strangers on the Internet is a great way to find new friends. Maybe you have a dilemma and no one to discuss it with. A stranger, who you can chat completely honest with, can sometimes be the best person to chat with for advice.
                        </p>
                    </div>
                    <div class="col-sm">
                        <h4>How Can I Talk to Strangers for Free?</h4>
                        <p>
                        You are lucky! It is completely free to talk to strangers on MakeMyFriend. In fact, most online chat apps are free to use. Which one is best is up to you. However, we prefer if you stay with us here on MakeMyFriend :)
                        </p>
                        <h4>Talk to strangers</h4>
                        <p>
                            A great way to expand your social network is to talk to strangers. MakeMyFriend is an anonymous chat app with online chat rooms. No registration is required in order to use our online chat service. Our chat service is free to use.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;