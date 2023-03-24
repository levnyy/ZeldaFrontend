import Navigation from '../Navigation/index';
import styles from './Header.module.css';
import Link from "next/link";

const Header = () => (
    <header>
        <div className={styles.home}>
            <img src="https://see.fontimg.com/api/renderfont4/15Lv/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/emVsZGE/the-wild-breath-of-zelda.png" alt="Zelda fonts" className={styles.font}/>
            <a href='#'><img src="cucco.png" className={styles.image}></img></a>
            <Navigation/>
        </div>
    </header>
)
export default Header;