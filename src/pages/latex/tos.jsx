const TOS = () => (
  <>
    <div className="main">
      <h1>LaTeX Formatter - Privacy Policy</h1>
      <p>
        Nicholas G, the operator of the Microsoft Teams 'LaTeX Formatter' bot
        (hereon referred to as 'the bot'), mandates that, in utilising such bot,
        you agree to the following terms of service:{" "}
      </p>
      <p>
        When you tag the bot on Microsoft Teams, you are sending the contents of
        the message to a server operated by Nicholas G for the process of
        formatting the message as an image from raw LaTeX. This data is not used
        for any other purpose, and is not stored persistently. Nicholas G only
        stores your data for the aforementioned processing purpose, and does not
        keep your data after it has been processed.
      </p>
      <p>
        If you find any bugs or security vulnerabilities in the software, you
        agree to inform the developers at{" "}
        <a href="mailto:security@nicholasg.me">security@nicholasg.me</a> within
        a reasonable amount of time.
      </p>
    </div>
    <style jsx>
      {`
    :global(html, body) {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
      color: #17252a;
      background-color: #def2f1;
      overflow-x: hidden;
    }
    h1 {
      text-align: center;
    }
    .main {
      width: 80%;
      display: flex;
      flex-flow: column nowrap;
      margin: 0 auto;
    }
    }
    `}
    </style>
  </>
);

export default TOS;
