import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      {/* Header */}
      <h1 className="text-6xl font-bold text-white mb-8">
        Hello, Tailwind with React!
      </h1>

      {/* Counter Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <p className="text-gray-700 text-lg mb-4">
          You clicked {count} times
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Click Me
        </button>
      </div>

      {/* Logos */}
      <div className="mt-8 flex space-x-4">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-16" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default App;