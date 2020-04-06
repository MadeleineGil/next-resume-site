import Layout from '../components/Layout';

const aboutPage = (
    <p>This is about page</p>
);

export default function About() {
    return <Layout content={aboutPage} />;
}