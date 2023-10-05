import Link from 'next/link';
import styles from '../styles/About.module.css'
import Head from 'next/head';
export default function About(){
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <main className={styles.about}>
                <h1 className={styles.text}>Pokedéx é só mais um projeto de pokedéx qualquer criado apenas com o intuito de praticar Next.js</h1>
                <figure>
                    <img className={styles.img} src="/images/pokeball.png"  alt='nature'/>
                </figure>
            </main>
        </>
    )
}