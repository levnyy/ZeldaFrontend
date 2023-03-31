import PostForm from "../../components/PostForm";
import { useGlobalContext } from '../../store/index'
import { useRouter } from "next/router"
import { useEffect } from "react"


export default function NewPost() {

    const { session, loading } = useGlobalContext()
    const router = useRouter()

    useEffect(() => {
        if (!session && !loading && router.isReady) {
            router.push("/login")
        }
    }, [session, router, loading])

    return session &&(
        <div>
            <h1>Create Post</h1>
            <PostForm />
        </div>
    )
}
