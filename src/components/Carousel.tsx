import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="container" id="cursos">
            <div className="course-header">
                <h2>Lorem impsum</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Similique, ullam.
                </p>
            </div>
            <Carousel responsive={responsive}>
                <div className="view-course">
                    <h5>Curso manicure</h5>
                    <img
                        src="https://i.ytimg.com/vi/OshByUcCkqA/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDEXHOW7IkV5IHyINtzKGKHGNRIFA"
                        alt="curso"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati ea consectetur, deserunt mollitia laboriosam
                        similique ipsam sequi assumenda corporis magnam
                        molestias odit repellat architecto fugit provident ipsa
                        ratione rerum nam.
                    </p>
                    <aside className="btn-access">
                        <a href="#">Acessar curso</a>
                    </aside>
                </div>
                <div className="view-course">
                    <h5>Curso manicure</h5>
                    <img
                        src="https://i.ytimg.com/vi/OshByUcCkqA/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDEXHOW7IkV5IHyINtzKGKHGNRIFA"
                        alt="curso"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati ea consectetur, deserunt mollitia laboriosam
                        similique ipsam sequi assumenda corporis magnam
                        molestias odit repellat architecto fugit provident ipsa
                        ratione rerum nam.
                    </p>
                    <aside className="btn-access">
                        <a href="#">Acessar curso</a>
                    </aside>
                </div>
            </Carousel>
        </section>
    );
};
