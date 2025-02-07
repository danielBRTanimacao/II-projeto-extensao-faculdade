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
            <Carousel responsive={responsive}>
                <div>
                    <h6>title curso</h6>
                    <img src="curso" alt="curso" />
                    <p>um pouco sobre</p>
                </div>
                <div>
                    <h6>title curso</h6>
                    <img src="curso" alt="curso" />
                    <p>um pouco sobre</p>
                </div>
                <div>
                    <h6>title curso</h6>
                    <img src="curso" alt="curso" />
                    <p>um pouco sobre</p>
                </div>
                <div>
                    <h6>title curso</h6>
                    <img src="curso" alt="curso" />
                    <p>um pouco sobre</p>
                </div>
                <div>
                    <h6>title curso</h6>
                    <img src="curso" alt="curso" />
                    <p>um pouco sobre</p>
                </div>
                <div>
                    <h6>title curso</h6>
                    <img src="curso" alt="curso" />
                    <p>um pouco sobre</p>
                </div>
            </Carousel>
        </section>
    );
};
