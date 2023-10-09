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
                <figure>
                    <img className={styles.img} src="/images/pokeball.png"  alt='nature'/>
                </figure>
                <h1 className={styles.text}>O projeto Pokédex é uma aplicação que utiliza as 
                    APIs da PokeAPI para obter informações detalhadas sobre Pokémon e a raw.githubusercontent.com/PokeAPI
                    para obter imagens de alta qualidade desses Pokémon.
                    Essa plicação foi criada com Next.js, React.js e CSS Modules com o intuito de praticar essas tecnologias.</h1>
            </main>
        </>
    )
}