import Layout from '../components/Layout';

const aboutPage = (
    <p>About me, education, skills</p>
);

//TODO: add (possibly) cards with images + summary
export default function About() {
    return <Layout content={aboutPage} />;
}