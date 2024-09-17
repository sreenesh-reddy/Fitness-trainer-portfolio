import styles from "./style.module.scss"


export default function Header(){
    return(<div className={styles.nav}>
        <div className={styles.copyright}>
            <span className={styles.copy}>&copy;</span>
                <div className={styles.names}><span className={styles.authors}>Code by Sreenesh and bhavani</span></div>
           
        </div>
        <div className={styles.links}>
        <a href="/home">Home</a>
        <a href="">Transformations</a>
        <a href="">Testimonals</a>
        <a href="">About</a>
        <a href="">Contact</a>
        </div>
        </div>)
}