import Link from 'next/link';

export default function BlogCard({ slug, title, date, coverImage, excerpt }) {
  return (
    <>
      <div className="card">
        <img src={coverImage.url} alt="Represents the title of the blog" />
        <Link href={`/blog/${slug}`}><h4 className="link">{title}</h4></Link>
        <span>{date}</span>
        <p>{excerpt}</p>
      </div>
      <style jsx>{`
      .card {
        background-color: #b8dbda;
        margin: 20px;
        padding: 20px;
        border-radius: 5px;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        max-width: 400px;
      }
      .link, .link:visited {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
      .link:hover {
        text-decoration: underline;
      }
      h4 {
        font-size: 1.5rem;
        margin: 15px 0;
        text-align: center;
      }
    `}
      </style>
    </>
  );
}
