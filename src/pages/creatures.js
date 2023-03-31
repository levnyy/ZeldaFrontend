import ZeldaAPI from '@/lib/api/Posts'
import styles from '../styles/creatures.module.css'

export default function CreaturesPage({characters}) {
  return (
    <div>
        <h1 className={styles.title}>CREATURES</h1>
        <div className={styles.layout}>
            <div>
                <div className={styles.text}>
                    <h1> CUCCO</h1>
                </div>
                <div className={styles.cucco}>
                    <img src='Cucco_New.png' className={styles.image}/>
                    
                </div>
            </div>
            <div>
                <div className={styles.text}>
                    <h1> BLUPPE</h1>
                </div>
                <div className={styles.bluppe}>
                <img src='Blupee.jpg' className={styles.image}/>
                </div>
            </div>
            <div>
                <div className={styles.text}>
                    <h1> BLUE-WINGED HERON</h1>
                </div>
                <div className={styles.blue}>
                    <img src='Blue-Winged Heron.png' className={styles.image}/>
                </div>
            </div>
        </div>
    </div>
  )
}
export async function getStaticProps() {
    const creatures = await ZeldaAPI.getCharacters()
    return {
        props: {creatures}
    }
}
