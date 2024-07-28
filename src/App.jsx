import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [selectedCount, setSelectedCount] = useState(0);
  const [hoverCount, setHoverCount] = useState(0);

  return (
    <div className="app">
      Star Rating
      <div className="star">
        {[...Array(5)].map((_, idx) => (
          <span
            key={idx}
            className={`${idx + 1 <= selectedCount ? 'selected' : ''} ${
              idx + 1 <= hoverCount ? 'selected' : ''
            }`}
            onClick={() => setSelectedCount(idx + 1)}
            onMouseOver={() => setHoverCount(idx + 1)}
            onMouseOut={() => setHoverCount(0)}
          >
            &#9733;
          </span>
        ))}
      </div>
      Rating Count: {selectedCount}
    </div>
  );
}

export default App;
