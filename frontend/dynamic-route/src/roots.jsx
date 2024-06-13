import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Products from "./components/products";
import Details from "./components/details";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Bookings from "./components/Bookings";
import Registration from "./Admin/Registration";
import Login from "./Admin/Login";
import AdminHeader from "./Admin/AdminHeader";
import MainHeader from "./components/MainHeader";
import AllBookings from "./Admin/adminComponants/allBookings";
import AddHotels from "./Admin/adminComponants/addHotels";
import AllUsers from "./Admin/adminComponants/allUsers";
import URegistration from "./Users/URegistration";
import ULogin from "./Users/ULogin";
import Home from "./components/DefaultNav/Home";
import Information from "./components/DefaultNav/Information";
import Contact from "./components/DefaultNav/Contact";
import Developer from "./components/DefaultNav/devloper";
import MyBookings from "./Users/MyBookings";

function Roots() {
  const [isAdmin, setIsAdmin] = useState(""); // State to track the type of user ("admin", "user", or "")

  return (
    <BrowserRouter>
      {isAdmin === "admin" ? (
        <AdminHeader />
      ) : isAdmin === "user" ? (
        <Header />
      ) : (
        <MainHeader />
      )}
      <Routes>
        {isAdmin === "admin" ? (
          // Admin Routes
          <>
            <Route path="/allBookings" element={<AllBookings />} />
            <Route path="/Information" element={<Information/>}/>
            <Route path="/addHotels" element={<AddHotels />} />
            <Route path="/Home" element={<Home/>}/>
            <Route path="/allUsers" element={<AllUsers />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Login" element={<Login setIsAdmin={setIsAdmin} />} />
            {/* <Route path="*" element={<Navigate to="/allBookings" replace />} /> */}
          </>
        ) : isAdmin === "user" ? (
          // User Routes
          <>
            <Route path="/products" element={<Products />} />
            <Route path="/details/:_id" element={<Details />} />
            <Route path="/URegistration" element={<URegistration />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Profile" element={<Profile />} /> 
            <Route path="/Bookings" element={<Bookings />} />
            <Route path="/Information" element={<Information/>}/>
            <Route path="/MyBookings" element={<MyBookings/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Settings" element={<Settings />} />
            <Route path="/ULogin" element={<ULogin setIsAdmin={setIsAdmin} />} />
            <Route path="/Login" element={<Login setIsAdmin={setIsAdmin} />} />
            <Route path="*" element={<Navigate to="/Dashboard" replace />} />
          </>
        ) : (
          // Default Routes
          <>
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Login" element={<Login setIsAdmin={setIsAdmin} />} />
            <Route path="/URegistration" element={<URegistration />} />
            <Route path="/ULogin" element={<ULogin setIsAdmin={setIsAdmin} />} />
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Information" element={<Information/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/devloper" element={<Developer/>}/>
            {/* <Route path="*" element={<Navigate to="/products" replace />} /> */}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Roots;
