import Layout from '../components/Layout'
import { getAllPostsData } from '../lib/fetch'
import Post from '../components/Post'
import { GetStaticProps } from 'next'
import { POST } from '../types/Types'
const BlogPage: React.FC = () => {
  return (
    <Layout title="Blog">
      <p className="text-4xl">blog page</p>
    </Layout>
  )
}
export default BlogPage
