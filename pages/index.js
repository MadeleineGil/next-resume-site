import Layout from '../components/Layout';
import { HandSpock } from '@styled-icons/fa-regular/HandSpock'
// import { MeImg }  from '../content/group-clg.jpg'

// TOOD: get the content from remote
export default function Index() {
    return (
    <Layout>
      <style jsx>{`
        h1 {
          padding: 0.5em;
        }
        #container {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          align-content: center;
        }
        #content {
          display: flex;
          justify-content: center;
          flex-direction:column;
          text-align: center;
          font-family: 'Arial';
          align-content: center;
          align-items: center;
          // align-self: stretch;
        }
        img {
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          height: 80%;
          width: 80%;
        }
      `}</style>
      <div id="container">
        <div id="image">
          <img src="/group-clg.jpg" alt="mad-img" />
        </div>
        <div id="content">
          <h1>Hi there!</h1>
          <p><HandSpock size="50"/></p>
          <h2>I'm Madeleine Gillard,</h2>
          <h2>nice to meet you.</h2>
          <p>I'm a Software Developer &amp; Aerial Arts student</p>
        </div>
      </div>
    </Layout>
    );
}