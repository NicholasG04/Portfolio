import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { getPostAndMoreBySlug, getAllSlugs } from '../../lib/graphcms';
import NavBar from '../../components/NavBar';
import BlogCard from '../../components/BlogCard';

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
  const { post, morePosts } = await getPostAndMoreBySlug(params.slug, preview);
  return {
    props: {
      preview,
      post,
      morePosts,
    },
  };
}

export default function BlogPost({ post, morePosts }) {
  const router = useRouter();
  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <NextSeo
        title={`${post.title} | Nicholas G`}
        description={post.excerpt}
        openGraph={{
          url: `https://nicholasg.me/blog/${post.slug}`,
          title: `${post.title} | Nicholas G`,
          description: post.excerpt,
        }}
      />
      <div className="main">
        <NavBar dark />
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <h1>{post.title} //</h1>
        <h3>{post.date.split('-').reverse().join('/')}</h3>
        <div style={{ margin: '25px auto', width: '90vw', maxWidth: '90vw' }}>
          <img className="coverImage" src={post.coverImage.url} width={1000} height={500} quality={100} priority style={{ margin: '0 auto', maxWidth: '70vw' }} />
        </div>
        <div>
          <ReactMarkdown>{post.content.markdown}</ReactMarkdown>
        </div>
        <div className="morePosts">
          <h4>More Posts</h4>
          <div className="cards">
            {morePosts.map((post) => (
              <BlogCard slug={post.slug} title={post.title} date={post.date} excerpt={post.excerpt} coverImage={post.coverImage} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-flow: column nowrap;
          width: 70vw;
          margin: 0 auto;
        }
        h1 {
          font-size: 3rem;
          margin-top: 100px;
          margin-bottom: 0;
        }
        h3 {
          font-weight: normal;
          font-style: italic;
        }
        .morePosts > h4 {
          font-size: 2.4rem;
          margin: 10px 0;
        }
        .morePosts > .cards {
          display: flex;
          flex-flow: row wrap;
          min-width: 350px;
        }
      `}
      </style>
    </>
  );
}