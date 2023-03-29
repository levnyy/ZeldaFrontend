import styles from '../styles/character.module.css'
export default function IndexPage({characters}) {
    return (
        <div>
            <h1>Characters</h1>
            <h2>baddek</h2><img src='baddek.png' className={styles.image}/>
            <h2>bamboo</h2><img src='bamboo.png' className={styles.image}/>
            <h2>baumar</h2><img src='baumar.png' className={styles.image}/>
            <h2>bayge</h2><img src='bayge.png' className={styles.image}/>
            <h2>beedle</h2><img src='beedle.png' className={styles.image}/>
            <h2>Daruk</h2><img src='Daruk.png' className={styles.image}/>
            <h2>Epona</h2><img src='Epona.png' className={styles.image}/>
            <h2>rivali</h2><img src='rivali.jpg' className={styles.image}/>
            <h2>Kairo</h2><img src='Kairo.jpg' className={styles.image}/>
            <h2>tali</h2><img src='tali.png' className={styles.image}/>
            <h2>prinzesszelda</h2><img src='prinzesszelda.png' className={styles.image}/>
        </div>
    )
}