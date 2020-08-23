import { useState } from 'react';
import { useScrollYPosition } from 'react-use-scroll-position';
import { useWindowHeight } from '@react-hook/window-size';

export default () => {
  const [mobileVis, setMobileVis] = useState(false);
  const scrollY = useScrollYPosition();
  const windowHeight = useWindowHeight();

  return (
    <>

      <div className="show-navbar-icon" onClick={() => setMobileVis(!mobileVis)} role="button">
        <div className="icon-bar" />
        <div className="icon-bar" />
        <div className="icon-bar" />
      </div>

      <nav>
        <li style={{ marginRight: 'auto' }}>Nicholas G</li>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
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
          position: fixed;
          top: 0;
          color: ${(scrollY + 50 > windowHeight) && !mobileVis ? ' #3aafa9' : '#def2f1'};
        }

        nav > li {
          padding: 5px;
        }

        @media only screen and (max-width: 500px) {
          nav {
            visibility: hidden;
          }
          .show-navbar-icon {
            visibility: visible;
            font-size: 30px;
            margin-top: 25px;
            cursor: pointer;
            position: fixed;
            top: 0;
            right: 20px;
          }

          .show-navbar-icon > .icon-bar {
            transform-origin: left;
            width: 29px;
            height: 2px;
            background-color: #fff;
            margin: 8px;
            transition: all .3s ease;
            transform: rotate(0);
          }
        }
    `}</style>
    </>
  );
};
