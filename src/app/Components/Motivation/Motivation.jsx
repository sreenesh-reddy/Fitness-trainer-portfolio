import styles from './style.module.scss'
import Image from 'next/image'
import pic from './pic.png'
export default function Motivaiton() {
    return (<div className={styles.body}>
        <div className={styles.mainpage}>
        <h3>MY MOTIVATION</h3>
        <h1>
            NO PAIN <br />
            <div className={styles.imgcontainer}>
                <Image src={pic} width={350} height={300} style={{borderRadius:"50px"}} alt="picture unavailable" />
            </div>
            NO GAIN
        </h1>
        </div>
    </div>)
}