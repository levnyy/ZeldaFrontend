import styles from '../styles/creatures.module.css'

export default function IndexPage({characters}) {
  return (
    <div>
        <h1>Creatures</h1>
        <h2> Cucco</h2><img src='Cucco_New.png' className={styles.image}/>
        <h2> Blupee</h2><img src='Blupee.jpg' className={styles.image}/>
        <h2> Blue-Winged Heron</h2><img src='Blue-Winged Heron.png' className={styles.image}/>
    </div>
  )
}