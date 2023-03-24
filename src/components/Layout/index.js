import Header from '../Header/index.js';
import Body from '../Body/index.js'
import styles from './Layout.module.css'
export default function Layout() {
    return (
        <>
            <Header />
            <main className={styles.margin} />
            <div>
                <Body className={styles.zelda}/>
            </div>
            <main/>
        </>
    )
}