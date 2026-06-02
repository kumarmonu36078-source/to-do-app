import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1. Bootstrap CSS ko import karein (Styling ke liye)
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. Bootstrap JS Bundle ko import karein (Slider ko dynamic chalane aur click working karne ke liye)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)