import Head from 'next/head';
import { Element, Link } from 'react-scroll';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nicholas G</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Element name="title" className="title">
          <NavBar />
          <h1>Nicholas G</h1>
          <h2>A student passionate about Web Development and Cyber Security</h2>
          <Link to="about" smooth offset={-50}><button style={{ cursor: 'pointer' }}>Let's Go</button></Link>
        </Element>

        <Element name="about" className="section">
          <About />
        </Element>

        <Element name="portfolio" className="section">
          <Portfolio />
        </Element>

        {/* <div className="section">
          <Blog />
        </div> */}

      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          color: #17252a;
          background-color: #def2f1;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }

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
