import styles from '/src/styles/index.module.css'
import ZeldaAPI from '/src/api/form'

export default function IndexPage() {
    return (
        <div>

        </div>
    )
}

export default function getStaticProps() {
    const form = await ZeldaAPI.readAll()
    return {
        props: {
            form }, revalidate: 1}
        }