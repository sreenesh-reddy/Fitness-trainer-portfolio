import Contact from "./Components/Contact/Contact"
import Landing from "./Components/Landing/Landing"
import Transformations from "./Components/Transformations/Transformations"
import Motivation from "./Components/Motivation/Motivation"
import About from "./Components/About/About"
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';
import Clients from "./Components/Clients/Clients"
import Services from "./Components/Services/Services"
import BMI from "./Components/BMI/BMI"
export default function Home() {
    return(
        <>
        {/* <Landing/>
         <Motivation/> */}
        <Services/>
        <BMI/>
        <Clients/> 
         <Contact/>
        </>
        
    )
}

