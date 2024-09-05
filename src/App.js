

import Menu from "./Components/Menu";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import DisplayAllitems from "./Components/Display Allitems";
import ContactUs from "./Components/Contact Us";
import {Routes , Route } from 'react-router-dom';
import AddDisplayAllitems from "./Components/AddDisplayAllitems";
import UpdateDisplayAllitems from "./Components/UpdateDisplayAllitems";





function App(){
  return (
    <>
    <Menu/>




    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/DisplayAllitems" element={<DisplayAllitems/>}/>
      <Route path="/AddDisplayAllitems" element={<AddDisplayAllitems/>}/>
      <Route path="/UpdateDisplayAllitems/:id" element={<UpdateDisplayAllitems/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
    </Routes>


   
   
    <Footer/>
    </>
  )
}


export default App;
