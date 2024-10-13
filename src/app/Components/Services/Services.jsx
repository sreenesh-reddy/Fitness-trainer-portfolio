"use client"
import styles from "./style.module.scss"
import Lottie from 'lottie-react';
import animationData1 from './anime3.json'
import animationData2 from './Animation - 1728755225056.json'
import animationData3 from './anime2.json'
import React from 'react';


const Card = () => {
  return (
      <div className={styles.card}>
          <h2 className={styles.cardheading}>Weight Gain/Loss</h2>
          <div className={styles.lottiecontainer}>
              <Lottie animationData={animationData2} />
          </div>
          <p className={styles.carddescription}>Online/Offline <br/>
          Monthly fee : 3000 Rs</p>
          <button className={styles.cardbutton}>Show More</button>
      </div>
  );
};
const Card2 = () => {
  return (
      <div className={styles.card}>
          <h2 className={styles.cardheading}>Personal Trainer</h2>
          <div className={styles.lottiecontainer}>
              <Lottie animationData={animationData1} />
          </div>
          <p className={styles.carddescription}>Online/Offline <br/>
          Monthly fee (online): 5000 rs<br/>
          Monthly fee (offline): 15000 rs
          </p>
          <button className={styles.cardbutton}>Show More</button>
      </div>
  );
};
const Card3 = () => {
  return (
      <div className={styles.card}>
          <h2 className={styles.cardheading}>Diet Advisory</h2>
          <div className={styles.lottiecontainer}>
              <Lottie animationData={animationData3} width={500} height={500} />
          </div>
          <p className={styles.carddescription}>Online/Offline<br/>
          Monthly fee : 2000 Rs </p>
          <button className={styles.cardbutton}>Show More</button>
      </div>
  );
};

function Services  ()  {
  return (
      <div className={styles.cardgrid}>
          <Card/>
          <Card2/>
          <Card3/>
          
      </div>
  );
};

export default Services;