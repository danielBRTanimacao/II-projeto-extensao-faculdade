import { useState, useEffect } from "react";

export default () => {
    const endpoint = "https://danielbatata.pythonanywhere.com/events";
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
        <section
            className="container"
            id="horarios"
            style={{ textAlign: "center" }}
        >
            <h1>Eventos e horários</h1>

            {loading && <p>Carregando eventos...</p>}
            {error && <p style={{ color: "red" }}>Erro: {error}</p>}

            {!loading && !error && (
                <article className="division">
                    {data.map((e, index) => (
                        <fieldset
                            key={index}
                            style={{
                                backgroundImage: `url('${e.imgOpacity}')`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}
                        >
                            <legend>{e.title}</legend>
                            <p>
                                <strong>{e.date}</strong>
                            </p>
                            <p>{e.text}</p>
                            <p dangerouslySetInnerHTML={{ __html: e.about }} />
                        </fieldset>
                    ))}
                </article>
            )}
        </section>
    );
};
