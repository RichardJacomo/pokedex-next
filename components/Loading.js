import styles from '../styles/Loading.module.css'

export default function Loading(){
    return (
        <div className={styles.loading}>
            <figure>
                <img className={styles.image} src="/images/load.png" alt='loading'/>
            </figure>
        </div>
    )
}