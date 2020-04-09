import Layout from '../components/Layout';
import { HandSpock } from '@styled-icons/fa-regular/HandSpock'

// TOOD: get the content from remote
export default function Index() {
    return (
    <Layout>
      <style jsx>{`
        h1, h3 {
          padding: 0.5em;
        }
        align-text: center;
        align-content:
      `}</style>
      <h1>Hi there!</h1>
      <p><HandSpock size="50"/></p>
      <h2>I'm Madeleine Gillard,</h2>
      <h2>nice to meet you.</h2>
      <p>I'm a Software Developer &amp; Aerial Arts student</p>
    </Layout>
    );
}