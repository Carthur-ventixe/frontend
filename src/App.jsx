import { Route, Routes } from 'react-router-dom'
import MainLayout from './app/layouts/MainLayout';
import Events from './app/pages/events/Events'
import './App.css'
import Bookings from './app/pages/bookings/Bookings';
import EventDetails from './app/pages/events/EventDetails';
import BookEvent from './app/pages/bookings/BookEvent';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Events />}/>
          <Route path='/events/:id' element={<EventDetails />}/>
          <Route path='/bookevent/:eventId/:packageId' element={<BookEvent />}/>
          <Route path='/bookings' element={<Bookings />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
