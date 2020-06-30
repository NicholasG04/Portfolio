import { DiReact, DiHtml5, DiCss3, DiJavascript1, DiGit, DiNginx, DiMongodb, DiLinux } from 'react-icons/di';
import { IconContext } from 'react-icons';
import SectionHeader from './SectionHeader';

export default () => (
  <>
    <IconContext.Provider value={{ size: '5em' }}>
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
        font-size: 2rem;
      }
      ul {
        list-style: none;
        padding: 0;
        display: flex;
      }
      h3 {
        font-size: 2.2rem;
      }
    `}
      </style>
    </IconContext.Provider>
  </>
);
