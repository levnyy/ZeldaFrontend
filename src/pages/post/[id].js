import { useRouter } from "next/router"
import Link from "next/link"
import PostsAPI from "../../../../Users/kofmehll/ZeldaFrontend/src/lib/api/Posts"
import styles from "./detailPost.module.css"
import { useGlobalContext } from '../../store'


export default function DetailPost({ post }) {

    const { session, loading } = useGlobalContext()
    const router = useRouter()

    const handleDelete = async () => {
        await PostsAPI.delete(post, session.accessToken)
        router.push('/')
    }

    return !post ? null : (
        <div>
            <div className={styles['detail-container-styling']}>
                <h1>{post.title}</h1>
                <p>{post.text}</p>
                <p><i>Erstellt am {post.createdAt}</i></p>
            </div>

            <div style={{paddingLeft: 50}}>
                <Link href={`/`}><a className="button">Back</a></Link>
                {session && <Link href={`/posts/edit/${post.id}`}><a className="button">Edit</a></Link>}
                {session && <a onClick={handleDelete} className="button">Delete</a>}
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    const post = await PostsAPI.read(context.params.id)
    return {
        props: { post }
    }
}

export async function getStaticPaths() {
    const posts = await PostsAPI.readAll()
    const paths = posts.map(post => (
        {
            params: { id: post.id.toString() }
        })
    )
    return { paths, fallback: true }
}
