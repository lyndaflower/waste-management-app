import "./App.css";
// import Cadi from "./component/cadi";
import Footer from "./component/footer";
import Login from "./component/Login";
import Register from "./component/register";
import Home from "./component/MainPage";
import Verification from "./component/verification";
import Layout from './Layout'
import { useState } from "react";
import NavBar from "./component/Navbar";
import { Routes,Route} from 'react-router-dom'

function App() {
  const [open,setOpen]=useState(false);
  return (
    <div className="relative"> 
<Routes>
  <Route path="/" element={<Layout />}/>
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="verification" element={<Verification/>} />
</Routes>
    </div>
  );
}

export default App;
