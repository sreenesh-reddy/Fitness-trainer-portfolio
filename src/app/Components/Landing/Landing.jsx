import styles from "./style.module.scss"
import Image from 'next/image'
import profile from './one.png'

export default function Landing() {
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
                <Image src={profile}
                    alt="VINAY"
                    width={600} height={500}>
                </Image>
            </div>
        </div>
    </>)
}