"use client"
import styles from "./style.module.scss"
import Image from 'next/image'
import vinbefore from './vinbefore.jpg'
import vinafter from './vinafter.jpg'
import clientbefore from './clientbefore.jpg'
import clientafter from './clientafter.jpg'
import { useEffect,useState } from "react"
export default function Clients(){

    const [img1, setip] = useState(vinbefore)
    const [img2, setip2] =useState(clientbefore)
    const imgarray = [vinbefore,vinafter]
    const imgarray2 = [clientbefore,clientafter]
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
            setip2(imgarray2[i]);
        }, 1500)
    }, [i])
    return(<>
   <div className={styles.body}>
      <div className={styles.mainpage}>

      <div className={styles.content}>
            <div className={styles.contentgrid}>
                 <div className={styles.name}>M SURESH</div> 
                 <div className={styles.subhead}>25 years 1 year consistency</div>
                <div className={styles.background}>
                    Started his fitness journey at 17 years old, after dropping out of diploma.
                    with consistent weight lifting, cardio, good diet under guidance, he achieved his dream physquie.
                </div>
            </div>
            <div className={styles.contentimg}>
            <Image src={img2} width={320} height={390} style={{ borderRadius:"50px"}}/>
            </div>
            <div className={styles.contentimg1}>
            <Image src={img2} width={550} height={790} style={{ borderRadius:"50px"}}/>
            </div>
        </div>
        <div className={styles.content1}>
            <div className={styles.contentimg}>
            <Image src={img1} width={320} height={390} style={{ borderRadius:"50px"}}/>
            </div>
            <div className={styles.contentimg1}>
            <Image src={img1} width={550} height={790} style={{ borderRadius:"50px"}}/>
            </div>
            <div>
                 <div className={styles.name}>K VINAY</div> 
                 <div className={styles.subhead}>22 years 1.5 years consistency</div>
                <div className={styles.background}>
                    Started his fitness journey at 17 years old, after dropping out of diploma.
                    with consistent weight lifting, cardio, good diet under guidance, he achieved his dream physquie.
                </div>
            </div>
        </div>
       
        <a href="#Contact">
                    <div className={styles.button} onClick={(x)=> setClick(!x)} >
                        SHOW MORE CLIENTS
                    </div>
        </a>
      </div>
      
    </div>
    </>)
}