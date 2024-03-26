import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import your CSS file for styling
import AllRoutes from './Components/AllRoutes';

function App() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = async () => {
    try {
      const response = await axios.post('http://localhost:5000/summarize', { text });
      setSummary(response.data.summary);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <AllRoutes/>
    </div>
  );
}

export default App;
