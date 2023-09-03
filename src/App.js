import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = { name, email };

    try {
      const response = await fetch('https://backend-alpha-wine.vercel.app/api/person', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData)
      });

      if(response.ok) {
        const result = await response.json();
        console.log(result);
        alert('Data saved successfully');
      } else {
        throw new Error('Failed to save data');
      }
    } catch (error) {
      console.error("There was an error saving the data:", error);
    }
  };

  return (
    <div className="App">
      <h2>Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
