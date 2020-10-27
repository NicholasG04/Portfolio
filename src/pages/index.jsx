import { Element, Link, scroller } from 'react-scroll';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';

import { getAllPosts } from '../lib/graphcms';

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: { posts },
    revalidate: 60,
  };
}

export default function Home({ posts }) {
  return (
    <div className="container">
      <main>
        <Element name="title" className="title">
          <NavBar />
          <h1>Nicholas G</h1>
          <h2>A student passionate about Web Development and Cyber Security</h2>
          <Link to="about" smooth offset={-50}><button style={{ cursor: 'pointer' }}>Let's Go</button></Link>
        </Element>

        <Element name="about" className="section" id="about">
          <About />
        </Element>

        <Element name="portfolio" className="section" id="portfolio">
          <Portfolio />
        </Element>

        <Element name="blog" className="section" id="blog">
          <Blog posts={posts} />
        </Element>

      </main>

      <style jsx global>{`
        .container {
          min-height: 100vh;
        }

        .title {
          text-align: center;
          height: 100vh;
          width: 100vw;
          padding: 25px;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          background-color: #3aafa9;
          color: #def2f1;
        }

        .title > h1 {
          font-size: 5rem;
          margin-bottom: 10px;
        }

        .title > h2 {
          margin-top: 0px;
        }

        .title button {
          border-radius: 10px;
          border: 1px solid #def2f1;
          background-color: #3aafa9;
          color: #def2f1;
          padding: 15px;
          width: 200px;
          font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;
          font-size: 1.2rem;
          transition: all .2s ease-in-out;
        }

        .title button:hover {
          border: 1px solid #2b7a78;
          background-color: #2b7a78;
          transform: scale(1.1);
        }

        .section {
          width: 70vw;
          margin: 100px auto;
          position: relative;
          min-width: 350px;
        }

        @media only screen and (max-width: 500px) {
          .title > h1 {
            font-size: 4rem;
          }
          .title > h2 {
            font-size: 1.4rem;
          }
        }
      `}
      </style>
    </div>
  );
}
