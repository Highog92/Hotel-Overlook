import './Global.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layouts/Main";
import { Homepage } from "./Pages/Homepage"
import { HotelsDestinations } from './Pages/HotelDestinations';
import { Reservation } from "./Pages/Reservation"
import { Login } from "./Pages/Login";
import { Rooms } from "./Pages/Rooms";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout title='Homepage' />}>
            <Route path="/homepage" element={<Homepage title="Homepage" />} />
            <Route path="/hotel&destinations" index element={<HotelsDestinations title='HotelDestinations' />} />
            <Route path="/rooms" index element={<Rooms title='Rooms' />} />
            <Route path="/reservation" index element={<Reservation title='Reservation' />} />
            <Route path="/login" index element={<Login title='Login' />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
