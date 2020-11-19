import Link from 'next/link';
import Image from 'next/image';
import { CardPost } from '../lib/types';

type BlogCardType = { card: CardPost }
export default function BlogCard({ card: { slug, title, date, coverImage, excerpt } }: BlogCardType): JSX.Element {
  return (
    <>
      <div className="card">
        <div style={{ cursor: 'pointer' }}>
          <Link href={`/blog/${slug}`}>
            <a><Image src={coverImage.url} alt="Represents the title of the blog" width={300} height={150} /></a>
          </Link>
        </div>
        <Link href={`/blog/${slug}`}><h4 className="link">{title}</h4></Link>
        <span>{date.split('-').reverse().join('/')}</span>
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
        max-width: 350px;
        transition: 0.3s;
        box-shadow: 0px 8px 16px 0 rgba(0,0,0,0.4);
      }
      .card:hover {
        box-shadow: 0px 16px 32px 0 rgba(0,0,0,0.4);
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
