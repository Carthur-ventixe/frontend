import { Route, Routes } from 'react-router-dom'
import MainLayout from './app/layouts/MainLayout';
import CenterLayout from './app/layouts/CenterLayout';
import Events from './app/pages/events/Events'
import './App.css'
import Bookings from './app/pages/Bookings/Bookings';
import EventDetails from './app/pages/Events/EventDetails';
import BookEvent from './app/pages/Bookings/BookEvent';
import SignIn from './app/pages/Account/SignIn';
import SignUp from './app/pages/Account/SignUp';
import EmailConfirmed from './app/pages/Account/EmailConfirmed';

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
          <Route path='/confirmed' element={<EmailConfirmed />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
