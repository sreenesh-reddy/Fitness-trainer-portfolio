"use client"
import styles from "./style.module.scss"
import Image from 'next/image'
import one from './one.png'
import two from './two.png'
import three from './three.png'
import four from './four.png'
import { useEffect, useState } from "react"
export default function Landing() {
    const [imgprofile,setip]=useState(one)
    const imgarray=[one,two,three]
    const [i,seti]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            if(i===imgarray.length-1){
                seti(0);
            }
            else{
                seti(i+1);
            }
                setip(imgarray[i]);
        },1500)
    },[i])
    return (<>
        <div className={styles.mainpage}>
            <div className={styles.hed}>
                <h1>TRANSFORM YOUR BODY <br /> TRANSFORM YOUR LIFE</h1>
                <a href="contact">
                    <div className={styles.button}>
                        CONTACT
                    </div>
                </a>
            </div>
            <div className={styles.img}>
                <Image src={imgprofile}
                    alt="lol"
                    width={400} height={500} style={{borderRadius: "50px"}}>
                </Image>
            </div>
        </div>
    </>)
}