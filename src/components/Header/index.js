import Navigation from '../Navigation/index';
import styles from './Header.module.css';


const Header = () => (
    <header>
        <div className={styles.home}>
            <a href='/'><img src="zelda.png" className={styles.image}></img></a>
            <img src="https://see.fontimg.com/api/renderfont4/15Lv/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/emVsZGE/the-wild-breath-of-zelda.png" alt="Zelda fonts" className={styles.font}/>
            <Navigation/>
        </div>
    </header>
)
export default Header;