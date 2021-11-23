import React from 'react'
import { Canvas } from './Canvas'
import { ClearCanvasButton } from './ClearCanvasButton';
import { CanvasProvider } from './CanvasContext';

import './App.css'

function App() {
  return (
    <div className="App">
      <CanvasProvider>
        <Canvas />
        <ClearCanvasButton />
      </CanvasProvider>
    </div>

  );
}

export default App;
