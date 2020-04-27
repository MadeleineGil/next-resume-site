import Layout from '../components/Layout';
import { HandSpock } from '@styled-icons/fa-regular/HandSpock'
// import { MeImg }  from '../content/group-clg.jpg'

// TOOD: get the content from remote
export default function Index() {
    return (
    <Layout>
      <style jsx>{`
        & {
          flex: 2;
          align-self: center;
          flex-grow: 2;
        }
        h1 {
          padding: 0.5em;
        }
        #container {
          display: flex;
          flex-direction: row;
          align-self: center;
          flex: 1;
          // align-self: stretch
        }
        #content {
          display: flex;
          justify-content: center;
          flex-direction:column;
          align-items: center;
          backdrop-filter: blur(2px);
        }
        img {
          width: 45%;
          // max-width: 50%;
          // min-width: 10%;
          height: auto;
          border-radius: 50%;
        }
      `}</style>
      <div id="container">
        <div id="content">
        <img src="/headshot.jpg" />
          <h1>Hi there!</h1>
          <HandSpock size="50"/>
          <h2>I'm Madeleine Gillard,</h2>
          <h2>nice to meet you.</h2>
          <p>I'm a Software Developer &amp; Aerial Arts student</p>
        </div>
      </div>
    </Layout>
    );
}