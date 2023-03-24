import Header from '../Header/index.js';
import styles from "@/styles/index.module.css";

export default function Layout({children}) {
    return (
        <>
            <Header />
            <main />
            <div>
                <img src="background.jpg"className={styles.zelda}/>
                {children}
            </div>
            <main/>
        </>
    )
}