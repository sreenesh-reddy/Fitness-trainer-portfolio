"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './Certification.module.scss';
import c1 from './certi.jpeg'
import c2 from './certi2.jpeg'

const Certification = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const certificates = [
    { src: c1, alt: 'Certificate 1' },
    { src: c2, alt: 'Certificate 2' },
  ];

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.certification}>
      <div className={styles.desktopLayout}>
        
        <div className={styles.images}>
          <Image  src={c2} alt=""  fill />
        </div>
        <div className={styles.images}>
          <Image  src={c1} alt=""  fill />
        </div>
       
        
      </div>
      <div className={styles.mobileLayout}>
        <div className={styles.images}>
        <Image src={certificates[currentImage].src} alt={certificates[currentImage].alt}  fill />
        </div>
        <div className={styles.buttons}>
          <button onClick={handlePrev}>{'<'}</button>
          <button onClick={handleNext}>{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default Certification;
