import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Derrick D. Brandon</title>
        <meta name="Derrick D. Brandon" content="Derrick D. Brandon" />
        <meta name="Description" content="Derrick D. Brandon Software Engineer"></meta>
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
            Currently working fulltime at{' '}
            <a href="https://www.justvanilla.com/">Vanilla</a>. I have full
            stack experience, having worked with technologies such as React,
            Node, Express, MongoDB, PostgreSQL, and various AWS services.
          </p>
          <p>
            My interests outside of work include making music using Ableton,
            design, and cooking.
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

      <style jsx>{`
        .main-container {
          padding: 15px;
        }
        .header-container {
          margin-bottom: 6rem;
        }
        .about {
          margin-bottom: 7rem;
        }
        .contact-links {
          max-width: 800px;
          font-weight: 570;
          display: block;
        }
        .contact,
        .resume,
        .linkedin,
        .github {
          padding-bottom: 5px;
        }
        @media (max-width: 600px) {
          .main-container {
            font-size: 18px;
            padding: 5px;
          }
          .header-container,
          .about {
            margin-bottom: 4rem;
          }
          .contact-links {
            bottom: 0;
          }
        }
      `}</style>

      <style jsx global>{`
        @font-face {
          font-family: 'Libre Baskerville';
          src: url('/fonts/Libre-Baskerville/LibreBaskerville-Regular.ttf');
          font-weight: 400;
          font-style: normal;
        }
        body {
          padding: 0;
          margin: 0;
          font-family: 'Libre Baskerville', 'HND', 'Helvetica', Arial,
            sans-serif;
          font-size: 28px;
          font-weight: 400;
          line-height: 1.2;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        a:hover {
          text-decoration: underline;
        }
        h1 {
          font-weight: 400;
          margin: 0;
        }

        p {
          max-width: 800px;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
