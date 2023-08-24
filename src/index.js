import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
)
