import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Page() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <main className={styles.home}>
                <h1>Pokedéx!</h1>
            </main>
        </>
    )
  }