import styles from "./style.module.scss"

export default function Header(){
    return(<div className={styles.nav}>
        <a href="/home">Home</a>
        <a href="/bhavani">Transformations</a>
        <a href="">Testimonals</a>
        <a href="">About</a>
        <a href="">Contact</a>
        </div>)
}