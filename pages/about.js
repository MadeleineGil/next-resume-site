import Layout from '../components/Layout';

const aboutPage = (
    <p>This is about page</p>
);

// TODO: decide content / if page is necessary
export default function About() {
    return <Layout content={aboutPage} />;
}