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

  if(router.isFallback) {
    return <div>Loading...</div>
  }
  return (
  <>
  <div className='antialiased px-5 md:px-0'>
    <article className="max-w-screen-md mx-auto">
      <Link href='/'>
        <a href="">Back</a>
      </Link>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-container" dangerouslySetInnerHTML={{__html: post.html}}></div>
    </article>
  </div>
    <style jsx>
      {`
        {/* article {
          outline: 1px solid red;
        } */}
      `}
    </style>
  </>
  )
}

export default Post;