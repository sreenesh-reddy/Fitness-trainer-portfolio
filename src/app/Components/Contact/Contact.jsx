import styles from "./style.module.scss"
import Image from 'next/image'
import phonelogo from './phone.png'
import insta from './insta.jpg'
import mail from './mail.png'
import facebook from './facebook.jpg'

export default function Contact() {
   return (<div className={styles.body}>
      <div className={styles.mainpage} id="Contact">
         <div className={styles.heading}>
            <h3>CONTACT</h3>
         </div>

         <div className={styles.totalContainer}>
            <div className={styles.logoos}>
               <Image src={mail} alt="mail" className={styles.logoimage} />
               <Image src={insta} alt="insta" className={styles.logoimage} />
               <Image src={phonelogo} alt="description" className={styles.logoimage} />
            </div>
            <div className={styles.logonames}>
               fitwithvinnu@gmail.com<br /><br />
               @fitwithvinnu<br /><br />
               9390966534<br />
            </div>
         </div>
      </div>
   </div>)
}