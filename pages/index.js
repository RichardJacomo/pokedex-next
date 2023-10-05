import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Card from '../components/Card'

export async function getStaticProps() {
    const maxPokemons = 100
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const res = await fetch(`${url}?&limit=${maxPokemons}`)
    const data = await res.json()

    data.results.forEach((e, i) => {
        e.id = i + 1
    })
    return {
        props: {
            pokemons: data.results
        }
    }
}

export default function Home({ pokemons }) {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <main className={styles.home}>
                <h1>Pokedéx!</h1>
                <ul className={styles.ul_list}>
                { pokemons.map((e) => (
                    <Card key={e.id} pokemon={e} />
                ))}
                </ul>
            </main>
        </>
    )
  }