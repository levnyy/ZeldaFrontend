import styles from './Body.module.css';


export default function Layout() {
    return (
        <div className={styles.body}>
            <main />
            <div>
                <img src="background.jpg" className={styles.zelda}/>
            </div>
            <main/>
        </div>
    )
}