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
          <h2 className={styles.cardheading}>WEIGHT GAIN/LOSS</h2>
          <div className={styles.lottiecontainer}>
              <Lottie animationData={animationData2} />
          </div>
          <p className={styles.carddescription}>ONLINE/OFFLINE <br/>
          Monthly fee : <span>3000 Rs</span></p>
          <button className={styles.cardbutton}>SHOW MORE</button>
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
          <p className={styles.carddescription}> ONLINE/OFFLINE <br/>
          Monthly fee (online): <span>5000 rs</span><br/>
          Monthly fee (offline): <span>15000 rs</span>
          </p>
          
          <button className={styles.cardbutton}>SHOW MORE</button>
          
      </div>
  );
};
const Card3 = () => {
  return (
      <div className={styles.card}>
          <h2 className={styles.cardheading}>DIET ADVISORY</h2>
          <div className={styles.lottiecontainer}>
              <Lottie animationData={animationData3} width={500} height={500} />
          </div>
          <p className={styles.carddescription}> ONLINE/OFFLINE<br/>
          Monthly fee : <span>2000 Rs</span> </p>
          <button className={styles.cardbutton}>SHOW MORE</button>
      </div>
  );
};

function Services  ()  {
  return (
    <div className={styles.mainpage}>
      <div className={styles.cardgrid}>
          <Card/>
          <Card2/>
          <Card3/>
          
      </div>
      </div>
  );
};

export default Services;