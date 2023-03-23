import Styles from './header.module.css'
import Link from 'next/link'; 

export default function Header() {
    return (
        <div className={Styles.Header}>
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
        </div>
    );
}