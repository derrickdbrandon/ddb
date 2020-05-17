import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Derrick D. Brandon</title>
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
            stack experience, having worked technologies such as React, Node,
            Express, MongoDB, PostgreSQL, and various AWS services.
          </p>
          <p>
            My interests outside of work include making music using Ableton,
            design, and cooking.
          </p>
        </div>
        <div className="links-contact">
          <div className="links">
            <div className="links-header">Links</div>
            <div>
              <a href="https://github.com/derrickdbrandon">Github</a>
            </div>
            <div>
              <Link href="/resume">
                <a>Resume</a>
              </Link>
            </div>
          </div>
          <div className="contact">
            <div className="contact-header">Contact</div>
            <div>
              <a className="email" href="mailto: derrickdbrandon@gmail.com">
                Email
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/derrickdbrandon/">
                LinkedIn
              </a>
            </div>
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
          margin-bottom: 11rem;
        }
        .links-contact {
          max-width: 800px;
          display: grid;
          grid-template-columns: 4fr 1fr;
          justify-content: space-between;
        }
        .contact-header,
        .links-header {
          text-decoration: underline;
        }
        @media (max-width: 600px) {
          font-size: 25px;
          .main-container {
            padding: 12px;
          }
          .about {
            margin-bottom: 8rem;
          }
        }
        @media (min-width: 800px) {
          .about {
            margin-bottom: 8rem;
          }
          .links-contact {
            display: block;
          }
          .links {
            margin-bottom: 4rem;
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
