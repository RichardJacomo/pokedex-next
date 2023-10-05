import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Card.module.css'
export default function Card({ pokemon }) {
    return (
        <li className={styles.card}>
            <Link className={styles.link} href={`/pokemon/${pokemon.id}`}>
                <h2 className={styles.id}>#{pokemon.id}</h2>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} 
                width={100} 
                height={100} />
                <h3 className={styles.title}>{pokemon.name}</h3>
            </Link>
        </li>
    )
}