import { DiReact, DiHtml5, DiCss3, DiJavascript1, DiGit, DiNginx, DiMongodb, DiLinux } from 'react-icons/di';
import { IconContext } from 'react-icons';
import SectionHeader from './SectionHeader';

export default () => (
  <div>
    <IconContext.Provider value={{ size: 'calc(4vw + 2em)' }}>
      <SectionHeader name="About" />
      <p>Hello - I'm Nicholas. Currently engaging with new Web Development projects and Cyber Security challenges,
        I aspire to become a full stack web developer and/or cyber security researcher!
      </p>

      <h3>Familiar Technologies</h3>
      <ul className="technologies">
        <li><DiHtml5 /></li>
        <li><DiCss3 /></li>
        <li><DiReact /></li>
        <li><DiJavascript1 /></li>
        <li><DiGit /></li>
        <li><DiMongodb /></li>
        <li><DiLinux /></li>
        <li><DiNginx /></li>
      </ul>

      <style jsx>{`
      p {
        font-size: calc(1vw + 1em);
      }
      ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-flow: row wrap;
      }
      h3 {
        font-size: calc(1vw + 2em);
      }
    `}
      </style>
    </IconContext.Provider>
  </div>
);
