import Link from "next/Link";
import styles from "./Navigation.module.css"
import { useGlobalContext } from "../../store/index";
import { useRouter } from "next/router";

export default function Navigation() {

    const { session, logout } = useGlobalContext()
    const router = useRouter()

    return (
        <nav className={styles.navigation}>
            <div>
                <ul>
                    <li>
                        <Link href="/bosses">Bosses</Link>
                    </li>
                    <li>
                        <Link href="/character">Characters</Link>
                    </li>
                    <li>
                        <Link href="/creatures">Creatures</Link>
                    </li>
                    <li>
                        <Link href="/locations">Locations</Link>
                    </li>
                    {session && <li><Link href="/profile">Profile</Link></li>}
                    <li>
                        {session ? <Link href="/" onclick={(e) => logout()}>Logout</Link> : <Link href="/login">Login</Link>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}