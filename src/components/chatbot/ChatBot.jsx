import React, { useState } from 'react';
import './ChatBot.css';
import { chatImg } from "../../assets/index";

const ChatBot = () => {
    const inputInitHeight = 50; // Ensure this is used if defined here
    const [userMessage, setUserMessage] = useState(''); // State to store user's message

    const handleInputChange = (e) => {
        e.target.style.height = `${inputInitHeight}px`;
        e.target.style.height = `${e.target.scrollHeight}px`;
        setUserMessage(e.target.value.trim());
    };

    const handleChat = () => {
        const API_KEY = "";
        const API_URL = "";

        if (!userMessage) return;

        const chatInput = document.querySelector(".chat-input textarea");
        chatInput.value = "";
        chatInput.style.height = `${inputInitHeight}px`;

        const chatbox = document.querySelector(".chatbox");
        const outgoingChatLi = createChatLi(userMessage, "outgoing");
        chatbox.appendChild(outgoingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);

        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }],
            })
        };

        fetch(API_URL, requestOptions)
            .then(res => res.json())
            .then(data => {
                incomingChatLi.querySelector("p").textContent = data.choices[0].message.content.trim();
                chatbox.scrollTo(0, chatbox.scrollHeight);
            })
            .catch(() => {
                incomingChatLi.querySelector("p").classList.add("error");
                incomingChatLi.querySelector("p").textContent = "Oops! Something went wrong. Please try again.";
                chatbox.scrollTo(0, chatbox.scrollHeight);
            });

        setUserMessage("");
    };

    const createChatLi = (message, className) => {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", `${className}`);
        let chatContent = className === "outgoing" ? `<p></p>` : `<span className="material-symbols-outlined">smart_toy</span><p></p>`;
        chatLi.innerHTML = chatContent;
        chatLi.querySelector("p").textContent = message;
        return chatLi;
    };

    return (
        <div>
            <button className="chatbot-toggler" onClick={() => document.body.classList.toggle("show-chatbot")}>
                <span><img className='animation' src={chatImg} alt="Chatbot icon" /></span>
                <span className="text-art rounded-full bg-green material-symbols-outlined p-1">close</span>
            </button>
            <div className="chatbot">
                <header>
                    <h2>Chatbot</h2>
                    <span className="close-btn material-symbols-outlined" onClick={() => document.body.classList.remove("show-chatbot")}>close</span>
                </header>
                <ul className="chatbox">
                    <li className="chat incoming">
                        <span className="material-symbols-outlined">smart_toy</span>
                        <p>Hi there 👋<br />How can I help you today?</p>
                    </li>
                </ul>
                <div className="chat-input">
                    <textarea placeholder="Enter a message..." spellCheck="false" onChange={handleInputChange} required></textarea>
                    <span className="material-symbols-rounded" onClick={handleChat}>send</span>
                </div>
            </div>
        </div>
    );
};

export default ChatBot;
