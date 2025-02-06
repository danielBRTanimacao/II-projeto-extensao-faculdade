import Header from "./components/Header";
import Section from "./components/Section";
import Carousel from "./components/Carousel";

export default () => {
    return (
        <>
            <Header />
            <Section />
            <main>
                <section className="container">
                    <Carousel />
                </section>
            </main>
        </>
    );
};
