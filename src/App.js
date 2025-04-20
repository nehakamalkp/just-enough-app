import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [showAffirmations, setShowAffirmations] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleContinue = () => {
    if (name.trim()) {
      setShowAffirmations(true);
    }
  };

  const showMessage = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  return (
    <div className="App">
      {!showAffirmations ? (
        <div className="welcome">
          <h2>Hey beautiful, enter your name 💫</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your lovely name"
          />
          <button onClick={handleContinue}>Continue</button>
        </div>
      ) : (
        <div className="affirmations">
          <h2>Hey {name}, you are just enough ✨</h2>
          <div className="card-grid">
            <div className="card" onClick={() => showMessage("You are deeply loved, more than you know 💖")}>
              You Are Loved
            </div>
            <div className="card" onClick={() => showMessage("You bring so much value to this world 🌟")}>
              You Are Valued
            </div>
            <div className="card" onClick={() => showMessage("Your heart is pure and good. You matter 🌟")}>
              You Are Good
            </div>
            <div className="card" onClick={() => showMessage("Your kindness lights up the world 🌈")}>
              You Are Kind
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="modal active">
          <div className="modal-content">
            <h3>You Are Awesome!</h3>
            <p>{modalMessage}</p>
            <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
