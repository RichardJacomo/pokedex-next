import styles from '../../styles/Pokemon.module.css'
import Image from 'next/image'
import getColor from '../../components/getColor'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
    const maxPokemons = 50
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const res = await fetch(`${url}?&limit=${maxPokemons}`)
    const data = await res.json()
    const paths = data.results.map((e, i) => {
        return {
            params: {
                pokemonId: `${i + 1}`
            }
        }
    })
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const pokemonId = context.params.pokemonId
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    const data = await res.json()
    return {
        props: {
            pokemon: data
        }
    }
}

export default function Pokemon({ pokemon }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Carregando...</div>
    }

    return (
        <main className={styles.pokemon}>
            <figure className={styles.figure} style={{backgroundColor: getColor(pokemon)}}>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} 
                    width={400} 
                    height={400} />
            </figure>
            <section className={styles.description}>
                <h1 className={styles.name}>{pokemon.name}</h1>
                <div className={styles.info}>
                    <div className={styles.types}>
                        {pokemon.types.map((e) => (
                            <div key={e.type.name} className={styles.type}>
                                {e.type.name}
                            </div>
                        ))}
                    </div>
                    <div className={styles.size}>
                            <div className={styles.weight}>
                                <h3>{pokemon.weight / 10} Kg</h3>
                                <p>Weight</p>
                            </div>
                            <div className={styles.height}>
                                <h3>{pokemon.height / 10} M</h3>
                                <p>Height</p>
                            </div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.hp}>
                            <h3>HP</h3>
                            <div className={styles.bar}>
                                <p>{pokemon.stats[0].base_stat}</p>
                                <div className={styles.hp_bar} style={{ width: `${pokemon.stats[0].base_stat}%` }}></div>
                            </div>
                        </div>
                        <div className={styles.attack}>
                            <h3>Attack</h3>
                            <div className={styles.bar}>
                                <p>{pokemon.stats[1].base_stat}</p>
                                <div className={styles.attack_bar} style={{ width: `${pokemon.stats[1].base_stat}%` }}></div>
                            </div>
                        </div>
                        <div className={styles.defense}>
                            <h3>Defense</h3>
                            <div className={styles.bar}>
                                <p>{pokemon.stats[2].base_stat}</p>
                                <div className={styles.defense_bar} style={{ width: `${pokemon.stats[2].base_stat}%` }}></div>
                            </div>
                        </div>
                        <div className={styles.speed}>
                            <h3>Speed</h3>
                            <div className={styles.bar}>
                                <p>{pokemon.stats[5].base_stat}</p>
                                <div className={styles.speed_bar} style={{ width: `${pokemon.stats[5].base_stat}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}