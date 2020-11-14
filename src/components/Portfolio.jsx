import { DiReact, DiHtml5, DiCss3, DiJavascript1, DiGit, DiNginx, DiLinux, DiPhp } from 'react-icons/di';
import { FaStripe, FaDiscord } from 'react-icons/fa';
import { SiNextDotJs } from 'react-icons/si';
import SectionHeader from './SectionHeader';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  const cards = [
    {
      name: 'Gaius Cicereius Dashboard',
      link: 'https://dash.gaiusbot.me',
      smallimg: '/images/gaiusdash.webp',
      largeimg: '/images/gaiusdash.webp',
      desc: 'In order to help the more than 15 million users of a popular Discord bot, I am currently working with the developers to build a React (Next.js) web dashboard that allows users to control the functionality of the bot, as well as purchase the premium upgrade (using Stripe). This features OAuth2 login, a custom API and taught me a significant amount about React.',
      stack: [<SiNextDotJs />, <DiReact />, <DiJavascript1 />, <DiCss3 />, <DiGit />, <DiNginx />, <DiLinux />, <FaStripe />, <FaDiscord />],
    },
    {
      name: 'ScatterVolt Website',
      link: 'https://scattervolt.com',
      largeimg: '/images/scattervolt.webp',
      smallimg: '/images/scattervolt.webp',
      desc: "Worked with the client on creating a website to fit his needs. Used HTML, CSS and JavaScript to make the site and collaborated with a team of people using GitHub. New features have been constantly added such as e-commerce that I managed to the client's specifications. More recently I added a 'Staff Control Panel' using OAuth2 with a PHP Backend.",
      stack: [<DiHtml5 />, <DiCss3 />, <DiPhp />, <FaDiscord />],
    },
  ];

  return (
    <div>
      <SectionHeader name="Portfolio" />
      <div className="cards">
        {cards.map((item, index) => (
          <PortfolioCard name={item.name} link={item.link} smallimg={item.smallimg} largeimg={item.largeimg} desc={item.desc} stack={item.stack} key={index} />
        ))}
      </div>
      <style jsx>{`
      .cards {
        display: flex;
        flex-flow: row wrap;
      }
    `}
      </style>
    </div>
  );
};

export default Portfolio;
