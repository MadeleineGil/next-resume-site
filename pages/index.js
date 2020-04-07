import Layout from '../components/Layout';

export default function Index() {
    return <Layout>
        <h1>Name Here</h1>
        <p>Get info about me here</p>
        <p>LinkedIn etc logos should go here</p>
        <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }
      `}</style>
    </Layout>;
}