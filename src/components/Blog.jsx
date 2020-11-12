import BlogCard from './BlogCard';
import SectionHeader from './SectionHeader';

const Blog = ({ posts }) => (
  <>
    <SectionHeader name="Blog" />
    <div className="blogPosts">
      {posts.map((post) => (
        <BlogCard key={post.slug} slug={post.slug} title={post.title} date={post.date} excerpt={post.excerpt} coverImage={post.coverImage} />
      ))}
    </div>
    <style jsx>{`
        .blogPosts {
          display: flex;
          flex-flow: row wrap;
        }
        .post {
          margin: 25px;
        }
      `}
    </style>
  </>
);

export default Blog;
