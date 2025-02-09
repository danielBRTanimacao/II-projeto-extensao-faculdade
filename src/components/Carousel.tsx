import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    const endpoint = "https://danielbatata.pythonanywhere.com";
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getDataEndpoint = async () => {
            try {
                const response = await fetch(endpoint);
                if (!response.ok) throw new Error(`Erro: ${response.status}`);

                const result = await response.json();
                setData(result);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        getDataEndpoint();
    }, []);

    return (
        <section className="container" id="cursos">
            <div className="course-header">
                <h2>
                    Cursos presenciais e online,{" "}
                    <span>
                        confira diversas recomendações de curso para você!
                    </span>
                </h2>
            </div>

            {loading ? (
                <div className="loading-api">
                    <h4>Carregando cursos...</h4>
                </div>
            ) : error ? (
                <div className="loading-api">
                    <h4>Erro ao carregar cursos: {error}</h4>
                </div>
            ) : (
                <Carousel responsive={responsive}>
                    {data.map((course, index) => (
                        <div key={index} className="view-course">
                            <img src={course.image} alt={course.title} />
                            <h5
                                style={{
                                    margin: "12px 0 6px",
                                    fontSize: "1.4em"
                                }}
                            >
                                {course.title}
                            </h5>
                            <p className="description-course">
                                {course.small_description}
                            </p>
                            <aside className="btn-access">
                                <a href={course.url} target="blanck">
                                    Acessar curso
                                </a>
                            </aside>
                        </div>
                    ))}
                </Carousel>
            )}
        </section>
    );
};
