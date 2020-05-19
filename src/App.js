import React, { useEffect, useState } from 'react';
import './App.css';

const colors = ['black', 'red', 'blue', 'green']

function App() {
  const [numResizes, setNumResizes] = useState(0)
  const handleResize = () => {
    console.log('Resize Event Triggered with following dimensions:')
    console.log({ width: window.innerWidth, height: window.innerHeight })
    setNumResizes(numResizes + 1)
  }

  useEffect(() => {
    window.removeEventListener('resize', handleResize)
    window.addEventListener('resize', handleResize)
  }, [numResizes])

  return (
    <div className="App"
      style={{
        background: colors[numResizes % 4]
      }}
    >
      <header className="App-header">
        <p>
          1. Open this site with an iOS device.
        </p>
        <p>
          2. Pinch zoom substantially.
        </p>
        <p>
          3. If the background color changes window resize events are getting triggered.
        </p>
      </header>
    </div>
  );
}

export default App;
