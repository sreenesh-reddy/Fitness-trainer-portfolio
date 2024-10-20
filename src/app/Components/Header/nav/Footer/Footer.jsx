import styles from './style.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
         <div className={styles.copyright}>
                <span className={styles.copy}>&copy;</span>
                <div className={styles.names}><span className={styles.authors}>Code by Sreenesh and bhavani</span></div>
            </div>
    </div>
  )
}