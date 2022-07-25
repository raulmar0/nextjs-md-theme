import Link from 'next/link';
import { useRouter } from 'next/router';
import { getPostData } from '../../utils/getPostData';

export const getStaticProps = async ({ params }) => {
  const post = await getPostData(params.slug);

  return {
    props: { post }
  }
}

export const getStaticPaths = async () => {

  return {
    paths: [],
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
    {/* <div>
      {props.posts[0].html}
      {JSON.stringify(props)}
    </div> */}
    <Link href='/'>
      <a href="">Back</a>
    </Link>
    <h1>{post.title}</h1>
    <div dangerouslySetInnerHTML={{__html: post.html}}>

    </div>
  </>
  )
}

export default Post;