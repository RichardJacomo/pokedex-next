import Head from 'next/head'
import styles from '../styles/404.module.css'
import Link from 'next/link'
export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 - Page not found</title>
            </Head>
            <main className={styles.home}>
                <h1>404 - Page not found</h1>
                <Link href="/">
                   Home
                </Link>
            </main>
        </>
    )
}