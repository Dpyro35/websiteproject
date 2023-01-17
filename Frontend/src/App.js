import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home.jsx'
import Signin from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Products from "./components/Products.jsx";
import Contact from "./components/Contact.jsx";
import Announcement from "./components/Announcement.jsx";
import Oneproduct from "./components/Oneproduct.jsx";
import Register from "./components/Register.jsx";
import State from './context/State'

function App() {
  return (
    <State>
    <Router basename='/'>
    
        <>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:value" element={<Products />} />
        <Route path="/account" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/announcements" element={<Announcement />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Oneproduct />} />
        </Routes>
        </>
      
    
    
    </Router>
 </State>
  );
}

export default App;
