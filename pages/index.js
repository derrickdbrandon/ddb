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
          <h1>Software Engineer</h1>
          <h1>Brooklyn, NY</h1>
        </div>
        <div className="about">
          <p>
            Currently full-time at{" "}
            <a href="https://www.justvanilla.com/">Vanilla</a>. I have full
            stack experience, having worked with technologies such as
            TypeScript, React, Node, Express, GraphQL, MongoDB, and various AWS
            services. Interests outside of work include discovering new music,
            making beats in Ableton, design, and cooking.
          </p>
        </div>
        <div className="contact-links">
          <div className="contact">
            <a href="mailto: derrickdbrandon@gmail.com">Contact</a>
          </div>
          <div className="resume">
            <Link href="/resume">
              <a>Resume</a>
            </Link>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/derrickdbrandon/">LinkedIn</a>
          </div>
          <div className="github">
            <a href="https://github.com/derrickdbrandon">Github</a>
          </div>
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
        .main-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: calc(100vh - 20px);
          font-family: "Libre Baskerville", "HND", "Helvetica", Arial,
            sans-serif;
          font-size: 24px;
          line-height: 1.4;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
        }
        .header-container {
          opacity: 1;
          animation-name: fadeInOpacity;
          animation-iteration-count: 1;
          animation-timing-function: ease-in;
          animation-duration: 0.40s;
        }
        .about {
          font-size: 30px;
          max-width: 75%;
          opacity: 1;
        }
        .about,
        .contact-links {
          animation-name: fadeInOpacity;
          animation-iteration-count: 1;
          animation-timing-function: ease-in;
          animation-duration: 0.65s;
        }
        @media (max-width: 600px) {
          .main-container,
          .about {
            font-size: 22px;
          }
          .header-container {
            font-size: 16px;
          }
          .about {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
