
import React from 'react';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h2>Weather App</h2>
      </header>
      <main>
        <Weather />
      </main>
      <footer>
        <h5>Created by Zaid</h5>
      </footer>
    </div>
  );
}

export default App;
