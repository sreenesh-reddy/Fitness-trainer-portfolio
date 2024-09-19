"use client"
import styles from "./style.module.scss"
import Image from 'next/image'
import vinbefore from './vinbefore.jpg'
import vinafter from './vinafter.jpg'
import clientbefore from './clientbefore.jpg'
import clientafter from './clientafter.jpg'
import { useEffect, useState } from "react"

export default function Transformations() {

    const [imgprofile, setip] = useState(vinbefore)
    const imgarray = [vinbefore, vinafter]
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
    
    const [imgprofile2, setip2] = useState(clientbefore)
    const imgarray2 = [clientbefore, clientafter]
    const [i2, seti2] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            if (i2 === imgarray2.length - 1) {
                seti2(0);
            }
            else {
                seti2(i2 + 1);
            }
            setip2(imgarray2[i2]);
        }, 1500)
    }, [i2])

    return (
        <div className={styles.body}>
            <div className={styles.mainpage} id="Transformations">
                <div className={styles.heading}>
                    <h3>TRANSFORMATIONS</h3><br/>
                </div>
                <div className={styles.imgcontainer}>
                    <Image src={imgprofile} alt="tans" width={300}
                        height={400}
                        style={{ minWidth: "50%", minHeight: "100%", borderRadius: "50px" }} className={styles.Image} />
                    <Image src={imgprofile2} alt="tans" width={300}
                        height={400}
                        style={{ minWidth: "50%", minHeight: "100%", borderRadius: "50px" }} className={styles.Image} />
                </div>



            </div>
        </div>)
}