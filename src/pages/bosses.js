import styles from '../styles/bosses.module.css'
export default function IndexPage({characters}) {
    return (
        <div>
            <h1>Bosses</h1>
            <h2>waterblight ganon</h2><img src='ganon.png' className={styles.image}/>
            <h2> Hinox (oldest black Kin)</h2><img src='hinox.png' className={styles.image}/>
            <h2> Stone talus</h2><img src='stonetalus.png' className={styles.image}/>
        </div>
    )
}