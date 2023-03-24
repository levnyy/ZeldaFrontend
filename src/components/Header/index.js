import Styles from './header.module.css'
import Link from 'next/link'; 
import Navigation from '../components/Navigation';


const Header = () => (
    <header>
        <div className={Styles.Header}>
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <Navigation/>
                </div>
        </div>
        </header>
    );

export default Header;