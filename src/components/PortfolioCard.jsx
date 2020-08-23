import ModalImage from 'react-modal-image';

export default ({ name, link, desc, smallimg, largeimg }) => (
  <>
    <div className="card">
      <ModalImage small={smallimg} large={largeimg} alt={name} hideDownload hideZoom />
      {link ? <a href={link} className="link" target="_blank" rel="noopener"><h4>{name}</h4></a>
        : <h4>{name}</h4>}
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
        margin: 15px 0;
        text-align: center;
      }
    `}
    </style>
  </>
);
