import ModalImage from 'react-modal-image';

const PortfolioCard = ({ item: { name, link, desc, smallimg, largeimg, stack } }) => (
  <>
    <div className="card">
      <ModalImage small={smallimg} large={largeimg} alt={name} hideDownload hideZoom />
      {link ? <a href={link} className="link" target="_blank" rel="noopener"><h4>{name}</h4></a>
        : <h4>{name}</h4>}
      <div className="stack">
        {stack.map((tech) => <div className="technology" key={tech.type.name}>{tech}</div>)}
      </div>
      <span>{desc}</span>
    </div>
    <style jsx>{`
      .card {
        background-color: #b8dbda;
        margin: 20px;
        padding: 20px;
        border-radius: 5px;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        max-width: 400px;
        transition: 0.3s;
        box-shadow: 0px 8px 16px 0 rgba(0,0,0,0.4);
      }
      .card:hover {
        box-shadow: 0px 16px 32px 0 rgba(0,0,0,0.4);
      }
      .link, .link:visited {
        color: black;
        text-decoration: none;
      }
      .link:hover {
        text-decoration: underline;
      }
      h4 {
        font-size: 1.5rem;
        margin: 15px 0 5px 0;
        text-align: center;
      }
      .stack {
        display: flex;
        font-size: 2rem;
      }
      .stack > .technology {
        margin: 0 2px;
      }
    `}
    </style>
  </>
);

export default PortfolioCard;
