import { useState } from 'react';
import { Link } from 'react-scroll';
import NextLink from 'next/link';

const NavBar = ({ dark = false }) => {
  const [mobileVis, setMobileVis] = useState(false);
  return (
    <>

      <div className={`show-navbar-icon ${mobileVis ? 'navbar-active' : ''}`} onClick={() => setMobileVis(!mobileVis)} role="button">
        <div className="icon-bar" />
        <div className="icon-bar" />
        <div className="icon-bar" />
      </div>

      <nav className={`${mobileVis ? 'mobile-open' : ''}`}>
        <NextLink href="/"><li style={{ marginRight: 'auto' }} className="item">Nicholas G</li></NextLink>
        <NextLink href="/"><Link smooth to="title" onClick={() => setMobileVis(false)} className="item"><li>Home</li></Link></NextLink>
        <NextLink href="/#about"><Link smooth to="about" onClick={() => setMobileVis(false)} className="item"><li>About</li></Link></NextLink>
        <NextLink href="/#portfolio"><Link smooth to="portfolio" onClick={() => setMobileVis(false)} className="item"><li>Portfolio</li></Link></NextLink>
        <NextLink href="/#blog"><Link smooth to="blog" onClick={() => setMobileVis(false)} className="item"><li>Blog</li></Link></NextLink>
      </nav>

      <style jsx>{`
        nav {
          display: flex;
          width: 90vw;
          padding: 20px;
          list-style-type: none;
          justify-content: flex-end;
          font-size: 1.1rem;
          margin-bottom: auto;
          position: absolute;
          top: 0;
          left: 5vw;
          color: ${dark ? '#3aafa9' : '#def2f1'};
          z-index: 1000;
        }

        nav :global(.item) {
          padding: 5px;
          cursor: pointer;
          z-index: 1001;
        }

        @media only screen and (max-width: 500px) {
          nav {
            visibility: hidden;
            left: 0;
            color: #def2f1;
          }
          .show-navbar-icon {
            visibility: visible;
            font-size: 30px;
            margin-top: 25px;
            cursor: pointer;
            position: fixed;
            top: 0;
            right: 20px;
            z-index: 1001;
          }

          .show-navbar-icon > .icon-bar {
            transform-origin: left;
            width: 29px;
            height: 2px;
            background-color: #2B7A78;
            margin: 8px;
            transition: all .3s ease;
            transform: rotate(0);
          }
          .navbar-active > .icon-bar:first-child {
            transform: rotate(45deg);
          }

          .navbar-active > .icon-bar:last-child {
            transform: rotate(-45deg);
          }

          .navbar-active *:not(:first-child):not(:last-child) {
            opacity: 0;
          }
          nav {
            padding: 0;
            clip-path: circle(0px at 90% -40%);
            height: 100vh;
            width: 100vw;
            transition: all 1s ease-out;
            position: fixed;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            background-color: #000000;
          }
          nav.mobile-open {
            visibility: visible;
            clip-path: circle(200vh at 90% -40%);
          }
          nav :global(.item:first-child) {
            display: none;
          }
          nav :global(.item) {
            line-height: 10vh;
          }
        }
    `}</style>
    </>
  );
};

export default NavBar;
