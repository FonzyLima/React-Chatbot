import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import React from "react";
import './App.css';

import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './config';

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
