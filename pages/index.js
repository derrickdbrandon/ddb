import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Derrick D. Brandon</title>
        <meta name="Derrick D. Brandon" content="Derrick D. Brandon" />
        <meta
          name="Description"
          content="Derrick D. Brandon Software Engineer"
        />
        <link rel="icon" href="/favicon.ico" type="image/ico" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="grid-container">
        <header>
          <h1>Derrick D. Brandon</h1>
          <h2>Brooklyn, NY</h2>
        </header>
        <p>
          Fullstack developer currently full-time at{" "}
          <a href="https://www.justvanilla.com/">Vanilla</a>.
        </p>
        <footer>
          <small>
            <a href="mailto:derrickdbrandon@gmail.com">email</a> /{" "}
            <a href="https://github.com/derrickdbrandon">github</a> /{" "}
            <a href="https://www.are.na/derrick-brandon">are.na</a>
          </small>
        </footer>
      </div>
      <style jsx global>{`
        @font-face {
          font-family: "AUTHENTICSans";
          src: url("fonts/AUTHENTIC-Sans.otf") format("otf"),
            url("fonts/AUTHENTIC-Sans.woff") format("woff"),
            url("fonts/AUTHENTIC-Sans.woff2"), format("woff2");
        }

        html,
        body,
        div {
          height: 100%;
        }

        .grid-container {
          display: grid;
          grid-auto-columns: auto auto auto;
          grid-auto-rows: auto auto auto;
        }

        body {
          background-color: #9f8f92;
          font-family: "AUTHENTICSans", Arial, sans-serif;
          font-size: 40px;
          text-align: center;
        }

        h1,
        h2 {
          font-weight: normal;
          line-height: 1em;
          margin: 0 auto;
        }

        h1 {
          -moz-transition: all 0.4s;
          -webkit-transition: all 0.4s;
          -o-transition: all 0.4s;
          transition: all 0.4s;
        }

        h1:hover {
          color: white;
          cursor: pointer;
          text-shadow: 0 0 20px #fff;
        }

        a {
          color: inherit;
          text-decoration: none;
          -moz-transition: all 0.4s;
          -webkit-transition: all 0.4s;
          -o-transition: all 0.4s;
          transition: all 0.4s;
        }

        a:hover {
          color: white;
          text-shadow: 0 0 20px #fff;
        }

        footer {
          align-self: end;
          margin-bottom: 1.2rem;
        }

        @media only screen and (max-width: 630px) {
          body {
            font-size: 30px;
          }
        }

        @media only screen and (max-width: 495px) {
          body {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
}
