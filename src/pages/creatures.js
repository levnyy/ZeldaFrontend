import Link from 'next/link'

export default function IndexPage({characters}) {
  return (
    <div>
        <h1>Zelda</h1>
    </div>
  )
}

/*export async function getStaticProps() {
  const posts = await PostsAPI.readAll()
  return {
        props: {posts}, revalidate: 1
  }
}*/