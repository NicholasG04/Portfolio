import BlogCard from './BlogCard';
import SectionHeader from './SectionHeader';

const Blog = ({ posts }) => (
  <>
    <SectionHeader name="Blog" />
    <div className="blogPosts">
      {posts.map((post) => (
        <BlogCard key={post.slug} card={post} />
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
