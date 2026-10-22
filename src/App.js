import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"


import BookRide from "./pages/BookRide"
import LiveTrack from "./pages/LiveTrack"
import RideHistory from "./pages/RideHistory"
import AdminDashboard from "./pages/AdminDashboard"

import Drivers from "./pages/Drivers"
import AddDriver from "./pages/AddDriver"
import "./components/fixLeafletIcon"
import Payment from "./pages/Payment"
import RideMonitor from "./pages/RideMonitor";

function App(){

    return(

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>

                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/book" element={<BookRide/>}/>
                <Route path="/live-track" element={<LiveTrack/>}/>
                <Route path="/history" element={<RideHistory/>}/>

                <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
                <Route path="/drivers" element={<Drivers/>}/>
                <Route path="/add-driver" element={<AddDriver/>}/>
                <Route path="/ride-monitor" element={<RideMonitor />}/>

               <Route path="/payment" element={<Payment/>}/>

            </Routes>

        </BrowserRouter>

    )

}

export default App;

