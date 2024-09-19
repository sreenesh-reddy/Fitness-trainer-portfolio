'use client'
import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from './Link/Linkk';
import Curve from './Curve/Curve';
import Footer from './Footer/Footer';
import { style } from 'framer-motion/client';

const navItems = [
  {
    title: "Home",
    href: "",
  },
  {
    title: "Transformations",
    href: "#Transformations",
  },
  {
    title: "Testimonals",
    href: "",
  },
  {
    title: "About",
    href: "#Motivation",
  },
  {
    title: "Contact",
    href: "#Contact",
  },
]

export default function Nav({buttonState}) {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const handleLinkClick = (href) => {
    console.log("Link clicked:", href);
    setSelectedIndicator(href);
    buttonState(false); // This closes the menu
  };
  return (<div className={styles.body}>
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
       <div className={styles.body}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <Link key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator} onClick={()=>handleLinkClick(data.href)}></Link>
                      })
                    }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>
  </div>)
}