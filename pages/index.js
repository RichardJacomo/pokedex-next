import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Card from '../components/Card'
import { useEffect, useState } from 'react'

async function fetchPokemons(offset, limit) {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    const res = await fetch(url);
    const data = await res.json();

    data.results.forEach((e, i) => {
        const regex = /\/pokemon\/(\d+)\//
        const match = e.url.match(regex)
        if (match) {
            e.id = match[1]
        }
    });

    return data.results;
}

export async function getStaticProps() {
    const initialLimit = 50;
    const initialPokemons = await fetchPokemons(0, initialLimit);
    return {
        props: {
            pokemons: initialPokemons
        }
    }
}

export default function Home({ pokemons }) {
    const [offset, setOffset] = useState(50);
    const [loading, setLoading] = useState(false);
    const [newPokemons, setNewPokemons] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            loadMorePokemons();
        }
        };

    const loadMorePokemons = async () => {
        if (loading) return;
        setLoading(true);
        const limit = 50;
        const newPokemonData = await fetchPokemons(offset, limit);

        if (newPokemonData.length > 0) {
            const filteredNewPokemonData = newPokemonData.filter((pokemon) => pokemon.id < 641);
        
            setNewPokemons((prevNewPokemons) => [...prevNewPokemons, ...filteredNewPokemonData]);
            setOffset(offset + limit);
        }

        setLoading(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [offset, loading]);

  return (
    <>
        <Head>
            <title>Home</title>
        </Head>
        <main className={styles.home}>
            <ul className={styles.ul_list}>
            {pokemons.map((e) => (
                <Card key={e.id} pokemon={e} />
            ))}
            {newPokemons.map((e) => (
                <Card key={e.id} pokemon={e} />
            ))}
            </ul>
        </main>
    </>
  );
}
