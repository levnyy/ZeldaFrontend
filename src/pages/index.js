import PostsAPI from "src/lib/api/Posts"
import Post from "../components/Post"

export default function Home({ posts }) {

    return (
        <div>
            <img src="background.jpg" className={styles.zelda}/>
        </div>
    )
}

export async function getStaticProps() {
    const posts = await PostsAPI.readAll()
    return {
        props: { posts }, revalidate: 1 }
}