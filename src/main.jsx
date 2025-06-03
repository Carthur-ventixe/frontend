import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import EventProvider from './app/contexts/EventContext.jsx'
import AccountProvider from './app/contexts/AccountContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventProvider>
      <AccountProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </AccountProvider>
    </EventProvider>   
  </StrictMode>,
)
