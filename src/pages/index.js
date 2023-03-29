import PostsAPI from "src/lib/api/Posts"
import styles from "../styles/Home.module.css"
export default function Home({ posts }) {

    return (
        <div>
            <img src="background.jpg" className={styles.zelda}/>
        </div>
    )
}

