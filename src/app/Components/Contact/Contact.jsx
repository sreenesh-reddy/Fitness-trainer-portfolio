"use client"
import styles from "./style.module.scss"
import Image from 'next/image'
import phonelogo from './phone.png'
import insta from './insta.jpg'
import mail from './mail.png'
import facebook from './facebook.jpg'
import React, { useState } from "react";

export default function Contact() {

  
   const [hoveredInstagram, setHoveredInstagram] = useState(false);
   const [hoveredGmail, setHoveredGmail] = useState(false);
      const instagramID = 'fitwithvinnu'; // Replace with your Instagram ID
      const gmailID = 'fitwithvinnu@gmail.com'; // Replace with your Gmail address
      
      const instagramUrl = `https://www.instagram.com/${instagramID}`;
      const gmailUrl = `mailto:${gmailID}`;
    
      const handleMouseEnterInstagram = () => {
         setHoveredInstagram(true);
       };
     
       const handleMouseLeaveInstagram = () => {
         setHoveredInstagram(false);
       };
     
       const handleMouseEnterGmail = () => {
         setHoveredGmail(true);
       };
     
       const handleMouseLeaveGmail = () => {
         setHoveredGmail(false);
       };
     
       const handleClickInstagram = () => {
         window.open(instagramUrl, '_blank');
       };
     
       const handleClickGmail = () => {
         window.open(gmailUrl, '_self'); // Opens the default email client
       };
      
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
            <div
        className={styles.instagramId}
        onMouseEnter={handleMouseEnterGmail}
        onMouseLeave={handleMouseLeaveGmail}
        onClick={handleClickGmail}
        style={{
          cursor: 'pointer',
          fontSize: '24px',
          fontWeight: 'bold',
          color:  'white',
          textShadow: hoveredGmail ? '0px 0px 10px rgba(66, 133, 244, 10)' : 'none',
          transition: '0.3s',
        }}
      >
        {gmailID}
        {hoveredGmail && <span className="prompt" style={{ marginLeft: '2px', color: '#4285F4', fontSize:'10px' }}>Click to mail</span>}
      </div><br /><br />

            <div
      className={styles.instagramId}
      onMouseEnter={handleMouseEnterInstagram}
        onMouseLeave={handleMouseLeaveInstagram}
        onClick={handleClickInstagram}
      style={{
        cursor: 'pointer',
        fontSize: '25px',
        fontWeight: 'bold',
        color: 'white' ,
        textShadow:hoveredInstagram? '0px 0px 10px rgba(255, 87, 51, 1)' : 'none',
        transition: '0.3s',
      }}
    >
      @{instagramID}
      {hoveredInstagram && <span className="prompt" style={{ marginLeft: '10px', color: '#FF5733',fontSize: '9px', }}>Click to visit</span>}
    </div><br /><br />
  
               
               
               9390966534<br />
            </div>
         </div>
      </div>
   </div>)
}
