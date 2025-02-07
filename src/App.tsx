import Header from "./components/Header";
import Section from "./components/Section";
import Carousel from "./components/Carousel";
import Liturgy from "./components/Liturgy";
import Footer from "./components/Footer";
import Events from "./components/Events";

export default () => {
    return (
        <>
            <Header />
            <Section />
            <main>
                <Carousel />
                <Events />
                <Liturgy />
            </main>
            <Footer />
        </>
    );
};
