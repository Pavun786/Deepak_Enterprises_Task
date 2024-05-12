import { useState } from "react";
import "../Navbar/Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom"

function Navbar (){

  const [show,setShow] = useState(true)
  const[dropMenu,setDropMenu] = useState(true)
//   const role = localStorage.getItem("role")

  const handleChage = () =>{
      setShow(!show)
      console.log("clicked")
  }


    return(
        <nav>
         <div className="logo">
          Deepak_Enterprises
         </div>
        <ul className={show ? "showMenu" : ""}>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#mission">Mission</a></li>
            <li> <a href="#service">Our services</a></li>
            <li><a href="#welfare">Welfare</a></li>
             <li><a href="#safety">Safety</a></li>
            <li><a href="#communication">Communication</a></li>
        
         </ul> 
        
        
         <div className="amber" onClick={()=>handleChage()}>
            <MenuIcon/>
         </div>
        </nav>
    )
}
export default Navbar;