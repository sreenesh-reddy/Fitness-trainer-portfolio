import styles from "./style.module.scss"
import Image from 'next/image'
import phonelogo from './phone.png' 
import insta from './insta.jpg'
import mail from './mail.png'
import facebook from './facebook.jpg'

export default function Contact(){
     return(<div className={styles.body}>
     <div className={styles.mainpage} id="Contact">

         <div className={styles.logocontainer}>
           <Image src={phonelogo} alt="description" className={styles.logoimage}/>
               <p>9390966534 </p>
               </div>

         <div className={styles.logocontainer}>
            <Image  src={insta} alt="insta" className={styles.logoimage} />         
            <p> @fitwithvinnu</p>
            </div> 


         <div className={styles.logocontainer}>
             <Image  src={facebook} alt="facebook" className={styles.logoimage} />
            <p>fitwithvinnu</p>
         </div>

         <div className={styles.logocontainer}>
            <Image  src={mail} alt="mail" className={styles.logoimage} />
            <p> fitwithvinnu@gmail.com</p>
         </div>
     </div>
     </div>)
}