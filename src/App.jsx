import './Global.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layouts/Main";
import { Homepage } from "./Pages/Homepage"
import { HotelsDestinations } from './Pages/HotelDestinations';
import { Reservation } from "./Pages/Reservation"
import { LoginPage } from "./Pages/LoginPage";
import { Rooms } from "./Pages/Rooms";
import { Denmark } from "./Pages/Destinations/Denmark";
import { Sweden } from "./Pages/Destinations/Sweden";
import { Poland } from "./Pages/Destinations/Poland";
import { Norway } from "./Pages/Destinations/Norway";
import { Island } from "./Pages/Destinations/Island";
import { Germany } from "./Pages/Destinations/Germany";
import { Finland } from "./Pages/Destinations/Finland";
import { SignUpPage } from './Pages/SignUpPage';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout title='Homepage' />}>
            <Route path="/" element={<Homepage title="Homepage" />} />
            <Route path="/homepage" element={<Homepage title="Homepage" />} />
            <Route path="/hotel&destinations" index element={<HotelsDestinations title='HotelDestinations' />} />
            <Route path="/rooms" index element={<Rooms title='Rooms' />} />
            <Route path="/reservation" index element={<Reservation title='Reservation' />} />
            <Route path="/loginpage" index element={<LoginPage title='Login' />} />
            <Route path="/signuppage" index element={<SignUpPage title='signup' />} />
            <Route path="/denmark" element={<Denmark title="denmark" />} />
            <Route path="/sweden" index element={<Sweden title='sweden' />} />
            <Route path="/norway" index element={<Norway title='norway' />} />
            <Route path="/finland" index element={<Finland title='finland' />} />
            <Route path="/island" index element={<Island title='island' />} />
            <Route path="/germany" index element={<Germany title='germany' />} />
            <Route path="/poland" index element={<Poland title='poland' />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
