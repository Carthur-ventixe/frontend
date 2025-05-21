import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import EventProvider from './app/contexts/EventContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EventProvider>   
  </StrictMode>,
)
