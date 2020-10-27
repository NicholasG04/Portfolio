import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllSlugs } from '../../lib/graphcms';

export async function getStaticPaths() {
  const posts = await getAllSlugs();
  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostBySlug(params.slug, preview);
  return {
    props: {
      preview,
      post: data,
    },
  };
}

export default function BlogPost({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <div>{JSON.stringify(post)}</div>
    </>
  );
}
