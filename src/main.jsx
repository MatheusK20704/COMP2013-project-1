import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductApp from './Components/ProductApp.jsx'
import data from "./data/data.js"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <ProductApp data={data} />
  </StrictMode>
);