import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";
import Chatbot from "./components/Chatbot";
import "./App.css"; // Import your CSS file for styling

const App = () => {
  const [tours, setTours] = useState(data);
  const [chatbotVisible, setChatbotVisible] = useState(false);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
      {chatbotVisible && <Chatbot />}
      <button className="chatbot-toggle-btn" onClick={toggleChatbot}>
        {chatbotVisible ? "Close Chatbot" : "Open Chatbot"}
      </button>
    </div>
  );
};

export default App;
