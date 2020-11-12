const SectionHeader = ({ name }) => (
  <>

    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
    <h2>{name} //</h2>

    <style jsx>{`
      h2 {
        font-size: 3.2rem;
      }
    `}
    </style>
  </>
);

export default SectionHeader;
