"use client"
import styles from "./style.module.scss"
import Image from 'next/image'
import one from './one.png'
import two from './two.png'
import three from './three.png'
import four from './four.png'
import { useEffect, useState } from "react"
import { removeListener } from "process"
export default function Landing() {
    const [imgprofile, setip] = useState(one)
    const imgarray = [one, two, three]
    const [i, seti] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            if (i === imgarray.length - 1) {
                seti(0);
            }
            else {
                seti(i + 1);
            }
            setip(imgarray[i]);
        }, 1500)
    }, [i])
    
    const [click,setClick]=useState(false)

    return (
        <div className={styles.mainpage} id="home">
            <div className={styles.hed}>
                <h1>TRANSFORM YOUR <span>BODY</span> <br/> TRANSFORM YOUR <span>LIFE</span></h1>
                <a href="#Services">
                    <div className={styles.button} onClick={(x)=> setClick(!x)} >
                        SERVICES
                    </div>
                </a>
                
            </div>
            <div className={styles.imgcontainer}>
                <Image
                
                    src={imgprofile}
                    alt="profile image"
                    width={450}
                    height={500}
                    style={{borderRadius:"50px"}}
                    
                />
            </div>
            <div className={styles.imgcontainer2}>
                <Image
                
                    src={imgprofile}
                    alt="profile image"
                    width={900}
                    height={900}
                    style={{borderRadius:"50px"}}
                    
                />
            </div>
        </div>
    )
}