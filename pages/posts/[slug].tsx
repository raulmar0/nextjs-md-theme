import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getPostData } from '../../utils/getPostData';
import { getPosts } from '../../utils/getPosts';

export const getStaticProps = async ({ params }) => {
  const post = await getPostData(params.slug);
  return {
    props: { post }
  }
}

export const getStaticPaths = async () => {
  const posts = await getPosts('slug');
  const paths = posts.map(post => ({
    params: {
      slug: post.slug
    }
  }))
  return {
    paths,
    fallback: true
  }
}

const Post = (props) => {

  const { post } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="An interesting raulmar's posr" />
      </Head>
      <div className='antialiased px-5 md:px-0'>
        <article className="max-w-screen-md mx-auto">
          <Link href='/'>
              <button className="mt-6 mr-2 px-2 py-1 text-base font-bold text-white uppercase transition-colors duration-200 bg-indigo-500 rounded hover:bg-indigo-800">Back to raulmar</button>
          </Link>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-container" dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </article>
      </div>
    </>
  )
}

export default Post;