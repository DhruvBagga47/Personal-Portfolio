import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

// Create a root for rendering
const root = createRoot(document.getElementById('root'));

// Render the app with React StrictMode and BrowserRouter
root.render(
  <StrictMode>
    <BrowserRouter basename="/Personal-Portfolio">
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Optional: Log performance metrics
reportWebVitals();