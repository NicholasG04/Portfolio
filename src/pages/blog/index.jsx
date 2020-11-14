import { NextSeo } from 'next-seo';
import { getAllPosts } from '../../lib/graphcms';
import BlogCard from '../../components/BlogCard';
import NavBar from '../../components/NavBar';

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: { posts },
    revalidate: 60,
  };
}

export default function Home({ posts }) {
  return (
    <>
      <NextSeo
        title="Nicholas G - Blog"
        openGraph={{
          title: 'Nicholas G - Blog',
        }}
      />
      <NavBar dark />
      <h1>Nicholas G - Blog //</h1>
      <div className="posts">
        {posts.map((post) => (
          <BlogCard key={post.slug} card={post} />
        ))}
      </div>
      <style jsx>{`
        h1 {
          text-align: center;
          font-size: 3rem;
        }
        .posts {
          display: flex;
          flex-flow: row wrap;
        }
      `}
      </style>
    </>
  );
}
