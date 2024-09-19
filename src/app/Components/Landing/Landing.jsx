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

    return (<div className={styles.body}>
        <div className={styles.mainpage}>
            <div className={styles.hed}>
                <h1>TRANSFORM YOUR BODY <br/> TRANSFORM YOUR LIFE</h1>
                <a href="#Contact">
                    <div className={styles.button} onClick={(x)=> setClick(!x)} >
                        CONTACT
                    </div>
                </a>
                
            </div>
            <div className={styles.imgcontainer}>
                <Image
                    src={imgprofile}
                    alt="profile image"
                    width={300}
                    height={400}
                    style={{minWidth:"50%", minHeight:"100%",borderRadius:"50px"}}
                    className={styles.Image}
                />
            </div>
        </div>
    </div>)
}