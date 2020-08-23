import SectionHeader from './SectionHeader';
import PortfolioCard from './PortfolioCard';

export default () => {
  const cards = [
    {
      name: 'Gaius Cicereius Dashboard',
      link: 'https://dash.gaiusbot.me',
      smallimg: 'https://cdn.discordapp.com/avatars/159744245517778945/49c364e9007f74c326287c50eca6919c.png',
      largeimg: 'https://cdn.discordapp.com/avatars/159744245517778945/49c364e9007f74c326287c50eca6919c.png',
      desc: 'In order to help the more than 15 million users of a popular Discord bot, I am currently working with the developers to build a React (Next.js) web dashboard that allows users to control the functionality of the bot, as well as purchase the premium upgrade (using Stripe). This features OAuth2 login, a custom API and taught me a significant amount about React.',
    },
    {
      name: 'ScatterVolt Website',
      link: 'https://dash.gaiusbot.me',
      smallimg: 'https://cdn.discordapp.com/avatars/159744245517778945/49c364e9007f74c326287c50eca6919c.png',
      largeimg: 'https://cdn.discordapp.com/avatars/159744245517778945/49c364e9007f74c326287c50eca6919c.png',
      desc: 'In order to help the more than 15 million users of a popular Discord bot, I am currently working with the developers to build a React (Next.js) web dashboard that allows users to control the functionality of the bot, as well as purchase the premium upgrade (using Stripe). This features OAuth2 login, a custom API and taught me a significant amount about React.',
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
