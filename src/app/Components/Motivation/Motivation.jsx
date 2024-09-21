import styles from './style.module.scss'
import Image from 'next/image'
import pic from './pic.png'

export default function Motivaiton() {
    return (<div className={styles.body}>
        <div className={styles.mainpage}>
        <div className={styles.heading}>
        <h3>MOTIVATION</h3>
        </div>
        <h1>
            NO <span>PAIN</span> <br />
            <div className={styles.imgcontainer}>
                <Image src={pic} width={350} height={300} style={{borderRadius:"50px"}} alt="picture unavailable" />
            </div>
            NO <span>GAIN</span>
        </h1>
        <a href="#Contact">
                    <div className={styles.button}>
                        ABOUT
                    </div>
        </a>
        </div>
    </div>)
}