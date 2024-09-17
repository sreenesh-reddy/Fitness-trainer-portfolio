"use client"
import styles from "./style.module.scss"
import { useState } from "react"
import Nav from "./nav/Nav"
import { AnimatePresence } from 'framer-motion';
export default function Header() {
    const [isActive, setIsActive] = useState(false);

<<<<<<< HEAD
    return (<div className={styles.body}>
        <div className={styles.navMob}>
            <div className={styles.copyright}>
                <span className={styles.copy}>&copy;</span>
=======

export default function Header(){
    return(<div className={styles.nav}>
        <div className={styles.copyright}>
            <span className={styles.copy}>&copy;</span>
>>>>>>> 3231caccb2d34c1262fc6bf0b6d9dbd13bb37df3
                <div className={styles.names}><span className={styles.authors}>Code by Sreenesh and bhavani</span></div>
            </div>
            <div className={styles.headerButtonContainer}>
                    <div onClick={() => { setIsActive(!isActive) }} className={`${styles.button}`}>
                        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    </div>
                </div>
    
                <AnimatePresence mode="wait">
                    {isActive && <Nav />}
                </AnimatePresence>
        </div>
<<<<<<< HEAD
        <div className={styles.navDesktop}>
            <div className={styles.copyright}>
                <span className={styles.copy}>&copy;</span>
                <div className={styles.names}><span className={styles.authors}>Code by Sreenesh and bhavani</span></div>

            </div>
            <div className={styles.links}>
                <a href="/home">Home</a>
                <a href="/bhavani">Transformations</a>
                <a href="">Testimonals</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
        </div></div>)
=======
        <div className={styles.links}>
        <a href="/home">Home</a>
        <a href="">Transformations</a>
        <a href="">Testimonals</a>
        <a href="">About</a>
        <a href="">Contact</a>
        </div>
        </div>)
>>>>>>> 3231caccb2d34c1262fc6bf0b6d9dbd13bb37df3
}