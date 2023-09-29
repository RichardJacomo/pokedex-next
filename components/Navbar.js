import Link from "next/link"
import styles from "../styles/Navbar.module.css"
export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <figure>
                <img className={styles.img} src="/images/pokeball.png"  alt='nature'/>
            </figure>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}