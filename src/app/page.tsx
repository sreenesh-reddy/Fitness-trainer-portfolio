import Contact from "./Components/Contact/Contact"
import Landing from "./Components/Landing/Landing"
import Transformations from "./Components/Transformations/Transformations"
import Motivation from "./Components/Motivation/Motivation"
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';

export default function Home() {
    return(
        <>
        <Landing/>
        <Motivation/>
        <Transformations/>
         <Contact/>  
        
        
        </>
        
    )
}

