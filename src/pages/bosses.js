import styles from '../styles/bosses.module.css'
export default function IndexPage({characters}) {
    return (

        <div>
            <h1 className={styles.title}>BOSSES</h1>
            <div>
                <div>
                    <h1 className={styles.text}>WATERBLIGHT GANON</h1>
                </div>
                <div className={styles.cucco}>
                    <img src='ganon.png' className={styles.image}/>
                </div>
            </div>

            <div>
                <div>
                    <h1 className={styles.text}>HINOX (OLDEST KIN)</h1>
                </div>
                <div className={styles.cucco}>
                    <img src='hinox.png' className={styles.image}/>
                </div>
            </div>

            <div>
                <div>
                    <h1 className={styles.text}>STONE TALUS</h1>
                </div>
                <div className={styles.cucco}>
                    <img src='stonetalus.png' className={styles.image}/>
                </div>
            </div>
        </div>

    )
}