import Navigation from '../Navigation/index';
import styles from './Header.module.css';
import Link from "next/link";

const Header = () => (
    <header>
        <div className={styles.home}>
            <Link href={"/"}/>

            <a href='#'><img src="cucco.png" className={styles.image}></img></a>
            <h1 className='title'>Zelda</h1>
            <Navigation/>
        </div>
    </header>
)
export default Header;