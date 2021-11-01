import { DiReact, DiHtml5, DiCss3, DiJavascript1, DiGit, DiNginx, DiMongodb, DiLinux } from 'react-icons/di';
import { SiNextdotjs, SiLinkedin, SiTwitter, SiStackoverflow, SiGithub } from 'react-icons/si';
import SectionHeader from './SectionHeader';

const About = () => (
  <div>
    <SectionHeader name="About" />

    <p>Hello - I'm Nicholas. Currently engaging with new Web Development projects and Cyber Security challenges,
      I aspire to become a full stack web developer and/or cyber security researcher!
    </p>

    <ul className="socials">
      <li><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/nicholas-g" label="LinkedIn"><SiLinkedin /></a></li>
      <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/WagwanNick" label="Twitter"><SiTwitter /></a></li>
      <li><a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/6710619/nicholasg04" label="StackOverflow"><SiStackoverflow /></a></li>
      <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/NicholasG04" label="GitHub"><SiGithub /></a></li>
    </ul>

    <h3>Familiar Technologies</h3>
    <ul className="technologies">
      <li><DiHtml5 /></li>
      <li><DiCss3 /></li>
      <li><SiNextdotjs /></li>
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
        font-size: calc(0.5vw + 2em);
      }
      .technologies li :global(svg) {
        width: calc(3vw + 2em);
        height: calc(3vw + 2em);
        margin: 0 5px;
      }
      .socials {
        margin-top: -20px;
      }
      .socials li :global(svg) {
        width: calc(0.5vw + 2em);
        height: calc(0.5vw + 2em);
        margin: 0 5px;
        color: #17252A;
      }
      :global(svg:hover, svg:visited) {
        color: #17252A;
      }
    `}
    </style>
  </div>
);

export default About;
