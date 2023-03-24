import Navigation from '../Navigation/index';
import styles from './Header.module.css';

const Header = () => (
    <header>
        <div className={styles.home}>
            <img src="cucco.png" className={styles.image}></img>
            <h1 className='title'>Zelda</h1>
            <Navigation/>
        </div>
    </header>
)
export default Header;