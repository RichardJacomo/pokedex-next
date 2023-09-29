import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <main className={styles.home}>
                <h1>Hello, Contact!</h1>
            </main>
        </>
    )
}