import Header from "./components/Header";
import Section from "./components/Section";
import Carousel from "./components/Carousel";
import Liturgy from "./components/Liturgy";

export default () => {
    return (
        <>
            <Header />
            <Section />
            <main>
                <section className="container">
                    <Carousel />
                </section>
                <Liturgy />
            </main>
        </>
    );
};
