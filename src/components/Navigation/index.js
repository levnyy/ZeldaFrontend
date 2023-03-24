import { useGlobalContext } from '@/store/index.js';

import styles from './Navigation.module.css';
import Link from "next/link";

export default function Navigation() {

    const {session, logout} = useGlobalContext();
    return (
        <nav className={styles.navigation}>
            <ul>
                <li><a href="#">Locations</a></li>
                <li><a href='#'>Bosses</a></li>
                <li><a href='#'>Characters</a></li>
                {session && <li><Link href="/">Logout</Link></li>}
                <li>
                    {session ? <Link href="/" onclick={(e) => logout()}>Logout</Link> : <Link href="/login">Login</Link>}
                </li>
            </ul>
        </nav>
    )
}