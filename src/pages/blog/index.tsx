import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../../lib/graphcms';
import BlogCard from '../../components/BlogCard';
import NavBar from '../../components/NavBar';
import { CardPost } from '../../lib/types';

export const getStaticProps: GetStaticProps = async () => {
  const posts: CardPost[] = await getAllPosts();
  return {
    props: { posts },
    revalidate: 60,
  };
};

type HomeProps = { posts: CardPost[] }
export default function Home({ posts }: HomeProps): JSX.Element {
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
        {posts.map((post: CardPost) => (
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
