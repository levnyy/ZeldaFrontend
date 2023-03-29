import Link from "next/link";
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
                        <Link href="/bosses">bosses</Link>
                    </li>
                    <li>
                        <Link href="/character">charakters</Link>
                    </li>
                    <li>
                        <Link href="/creatures">creatures</Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    {session && <li><Link href="/profile">Profile</Link></li>}
                    <li>
                        {session ? <Link href="/login"><a onClick={(e) => logout()} className="nav-link">Logout</a></Link> : <Link href="/login"><a className={"nav-link " + (router.pathname == "/login" && "active")}>Login</a></Link>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}
