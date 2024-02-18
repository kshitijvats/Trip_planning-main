// Chatbot.js

import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import data from '../data'; // Import the destination data

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Add a welcome message when the component mounts
    setMessages([
      {
        text: "👋 Welcome to the Travel Chatbot! Ask me about different destinations.",
        user: false
      }
    ]);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') {
      return;
    }

    // Add user message
    setMessages([...messages, { text: inputValue, user: true }]);

    // Simulate a response from the chatbot based on the user's input
    const response = generateBotResponse(inputValue.toLowerCase());
    setMessages([...messages, response]);

    // Clear the input field
    setInputValue('');
  };

  const generateBotResponse = (userInput) => {
    // Logic to generate a response based on user input
    const destination = data.find(dest => dest.name.toLowerCase() === userInput);

    if (destination) {
      return {
        text: `Here's information about ${destination.name}: ${destination.info}`,
        user: false
      };
    } else {
      return {
        text: "I'm sorry, I don't have information about that destination. Please ask about another location.",
        user: false
      };
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={message.user ? 'user-message' : 'bot-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your destination..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
