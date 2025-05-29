import { Route, Routes } from 'react-router-dom'
import MainLayout from './app/layouts/MainLayout';
import CenterLayout from './app/layouts/CenterLayout';
import Events from './app/pages/events/Events'
import './App.css'
import Bookings from './app/pages/bookings/Bookings';
import EventDetails from './app/pages/events/EventDetails';
import BookEvent from './app/pages/bookings/BookEvent';
import SignIn from './app/pages/account/SignIn';
import SignUp from './app/pages/account/SignUp';

function App() {


  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Events />}/>
          <Route path='/events/:id' element={<EventDetails />}/>
          <Route path='/bookevent/:eventId/:packageId' element={<BookEvent />}/>
          <Route path='/bookings' element={<Bookings />}/>
        </Route>
        <Route element={<CenterLayout />}>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
