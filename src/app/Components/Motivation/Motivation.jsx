import styles from './style.module.scss'
import Image from 'next/image'
import pic from './pic.png'

export default function Motivaiton() {
    return (
        <><div className={styles.pcbody}>
            <div className={styles.mainpage}>
                <div className={styles.heading}>
                    <h3>MOTIVATION</h3>
                </div>
                <div className={styles.bod}>
                <div className={styles.hed}>
                <h1>
                    NO <span>PAIN</span> <br />
                    NO <span>GAIN</span>
                </h1>
                <a href="#About">
                    <div className={styles.button}>
                        ABOUT
                    </div>
                </a>
                </div>
                <div className={styles.imgcontainer}>
                        <Image src={pic} width={350} height={300} style={{ borderRadius: "50px" }} alt="picture unavailable" />
                </div>
                </div>
            </div>
        </div>

            <div className={styles.mobbody}>
                <div className={styles.mainpage}>
                    <div className={styles.heading}>
                        <h3>MOTIVATION</h3>
                    </div>
                    <h1>
                        NO <span>PAIN</span> <br />
                        <div className={styles.imgcontainer}>
                            <Image src={pic} width={350} height={300} style={{ borderRadius: "50px" }} alt="picture unavailable" />
                        </div>
                        NO <span>GAIN</span>
                    </h1>
                    <a href="#About">
                        <div className={styles.button}>
                            ABOUT
                        </div>
                    </a>
                </div>
            </div>
        </>)
}