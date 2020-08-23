import SectionHeader from './SectionHeader';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  const cards = [
    {
      name: 'Gaius Cicereius Dashboard',
      link: 'https://dash.gaiusbot.me',
      smallimg: '/images/gaiusdash.png',
      largeimg: '/images/gaiusdash.png',
      desc: 'In order to help the more than 15 million users of a popular Discord bot, I am currently working with the developers to build a React (Next.js) web dashboard that allows users to control the functionality of the bot, as well as purchase the premium upgrade (using Stripe). This features OAuth2 login, a custom API and taught me a significant amount about React.',
    },
    {
      name: 'ScatterVolt Website',
      link: 'https://scattervolt.com',
      largeimg: '/images/scattervolt.jpg',
      smallimg: '/images/scattervolt.jpg',
      desc: "Worked with the client on creating a website to fit his needs. Used HTML, CSS and JavaScript to make the site and collaborated with a team of people using GitHub. New features have been constantly added such as e-commerce that I managed to the client's specifications. More recently I added a 'Staff Control Panel' using OAuth2 with a PHP Backend.",
    },
  ];

  return (
    <div>
      <SectionHeader name="Portfolio" />
      <div className="cards">
        {cards.map((item, index) => (
          <PortfolioCard name={item.name} link={item.link} smallimg={item.smallimg} largeimg={item.largeimg} desc={item.desc} key={index} />
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
