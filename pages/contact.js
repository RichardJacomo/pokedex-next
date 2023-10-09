import Head from 'next/head'
import styles from '../styles/Contact.module.css'
export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <main className={styles.contact}>
                <h1>Olá, vamos caçar pokémons?</h1>
                <h1>...brincadeirinha. Segue o meu LinkedIn:</h1>
                <div className={styles.profile}>
                    <img src='https://media.licdn.com/dms/image/C4D03AQGy0DrA1XkAXA/profile-displayphoto-shrink_800_800/0/1658430804420?e=1702512000&v=beta&t=RXfo6ssBZK5y7JlgMjBOV5XuXEE1AXzYX5TH4x5eWdI'></img>
                    <a href="https://www.linkedin.com/in/richard-jacomo/">Acessar perfil</a>
                </div>
            </main>
        </>
    )
}