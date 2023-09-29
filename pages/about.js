import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Head from 'next/head';
export default function About(){
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <main className={styles.home}>
                <h1>Hello, About!</h1>
            </main>
        </>
    )
}