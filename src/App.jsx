import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui", padding: 32, lineHeight: 1.5 }}>
      <h1>My React Site</h1>
      <p>It works ✅</p>

      <button onClick={() => alert("Hello!")}>
        Click me
      </button>
    </div>
  );
}


