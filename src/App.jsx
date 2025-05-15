import { Route, Routes } from 'react-router-dom'
import MainLayout from './app/layouts/MainLayout';
import Events from './app/pages/events/Events'
import './App.css'
import Bookings from './app/pages/bookings/Bookings';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Events />}/>
          <Route path='/bookings' element={<Bookings />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
