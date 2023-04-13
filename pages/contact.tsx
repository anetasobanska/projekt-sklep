import { Main } from '../components/Main';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer';

const AboutPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Main>pages / contact.tsx</Main>
            <Footer />
        </div>
    );
};

export default AboutPage;