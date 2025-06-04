import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import CenterLayout from './layouts/CenterLayout';
import Events from './pages/Events/Events'
import './App.css'
import Bookings from './pages/Bookings/Bookings';
import EventDetails from './pages/Events/EventDetails';
import BookEvent from './pages/Bookings/BookEvent';
import SignIn from './pages/Accounts/SignIn';
import SignUp from './pages/Accounts/SignUp';
import EmailConfirmed from './pages/Accounts/EmailConfirmed';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {


  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Events />}/>
          <Route path='/events/:id' element={<EventDetails />}/>
          <Route path='/bookevent/:eventId/:packageId' element={<ProtectedRoute><BookEvent /></ProtectedRoute>}/>
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
