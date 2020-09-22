import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Derrick D. Brandon</title>
        <meta name="Derrick D. Brandon" content="Derrick D. Brandon" />
        <meta
          name="Description"
          content="Derrick D. Brandon Software Engineer"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-container">
        <div className="header-container">
          <h1>Derrick D. Brandon</h1>
          <h1 className="title">Software Engineer</h1>
          <h1>Brooklyn, NY</h1>
        </div>
        <div className="about">
          <p>
            Currently full-time at{" "}
            <a href="https://www.justvanilla.com/">Vanilla</a>. I have full
            stack web development experience, having worked with
            technologies such as TypeScript, React, GraphQL, Node, MongoDB, and
            AWS. Outside of work I enjoy discovering new music, making beats in
            Ableton, and cooking.
          </p>
        </div>
        <div className="footer">
          <div className="contact-links">
            <div className="contact">
              <a href="mailto: derrickdbrandon@gmail.com">Email</a>
            </div>
            <div className="resume">
              <Link href="/resume">
                <a>Resume</a>
              </Link>
            </div>
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/derrickdbrandon/">
                LinkedIn
              </a>
            </div>
            <div className="github">
              <a href="https://github.com/derrickdbrandon">Github</a>
            </div>
          </div>
          <img className="logo" alt="laptop" src="/favicon.ico" />
        </div>
      </div>

      <style jsx global>{`
        @font-face {
          font-family: "Libre Baskerville";
          src: url("/fonts/Libre-Baskerville/LibreBaskerville-Regular.ttf");
          font-weight: 400;
          font-style: normal;
        }
        @keyframes fadeInOpacity {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        a:hover {
          text-decoration: underline;
          text-decoration-style: dotted;
        }
        h1 {
          font-weight: 400;
          margin: 0;
        }
        p {
          margin: 12px 0 12px 0;
        }
        .main-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: calc(100vh - 20px);
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
        }
        .header-container,
        .about {
          font-family: "Libre Baskerville", "HND", "Helvetica", Arial,
            sans-serif;
          line-height: 1.25;
        }
        .header-container {
          font-size: 24px;
          opacity: 1;
          animation-name: fadeInOpacity;
          animation-iteration-count: 1;
          animation-timing-function: ease-in;
          animation-duration: 0.75s;
        }
        .about,
        .footer {
          animation-name: fadeInOpacity;
          animation-iteration-count: 1;
          animation-timing-function: ease-in;
          animation-duration: 1.25s;
        }
        .about {
          font-size: 32px;
          max-width: 1180px;
          margin-bottom: 40px;
        }
        .footer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .contact-links {
          font-family: "Helvetica", Arial, sans-serif;
          font-size: 22px;
        }
        .logo {
          height: 110px;
          width: 110px;
        }

        @media (min-width: 1180px) {
          .header-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }

          .title {
            display: none;
          }

          .about {
            align-self: center;
            font-size: 28px;
            text-align: center;
            width: 875px;
            margin-top: 20px;
          }
        }

        @media (max-width: 830px) {
          .about {
            font-size: 28px;
            margin: 0;
          }
          .logo {
            height: 100px;
            width: 100px;
          }
        }

        @media (max-width: 600px) {
          .header-container,
          .about {
            font-size: 22px;
          }
          .header-container {
            font-size: 16px;
          }
          .about {
            max-width: 100%;
          }
          .contact-links {
            font-size: 20px;
          }
        }

        @media (max-width: 320px) {
          .header-container {
            font-size: 12px;
          }
          .main-container,
          .about,
          .contact-links {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}
