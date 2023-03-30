import styles from '../styles/bosses.module.css'
export default function IndexPage({characters}) {
    return (

        <div>
            <h1 className={styles.title}>BOSSES</h1>
            <div>
                <div className={styles.text}>
                    <h2>WATERBLIGHT GANON</h2>
                </div>
                <div className={styles.cucco}>
                    <img src='ganon.png' className={styles.image}/>
                </div>
            </div>

            <div>
                <div className={styles.text}>
                    <h2>HINOX (OLDEST KIN)</h2>
                </div>
                <div className={styles.cucco}>
                    <img src='hinox.png' className={styles.image}/>
                </div>
            </div>

            <div>
                <div className={styles.text}>
                    <h2>STONE TALUS</h2>
                </div>
                <div className={styles.cucco}>
                    <img src='stonetalus.png' className={styles.image}/>
                </div>
            </div>
        </div>

    )
}