import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/MainContainer.module.css"
import Head from "next/head"
export default function MainContainer({ children }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/icons/favicon.ico" />
                <title>Pokedéx</title>
            </Head>
            <Navbar />
            <main className={styles.container}>{children}</main>  
            <Footer />       
        </>
    )
}