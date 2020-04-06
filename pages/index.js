import Layout from '../components/Layout';

const indexPage = (
    <p>Hello Next.js</p>
);

export default function Index() {
    return <Layout content={indexPage} />;
}