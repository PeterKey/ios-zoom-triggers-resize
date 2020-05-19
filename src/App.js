import React, { useEffect } from 'react';
import './App.css';

function App() {
  const handleResize = () => {
    console.log({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          1. Connect to iOS device via Safari Developer Menu.
        </p>
        <p>
          2. Observe console outputs.
        </p>
        <p>
          3. Pinch Zoom substantially
        </p>
        <p>
          4. Is width and height updated?
        </p>
      </header>
    </div>
  );
}

export default App;
