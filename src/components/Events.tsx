import { useState, useEffect } from "react";

interface EventData {
    title: string;
    date: string;
    text: string;
    about: string;
    imgOpacity: string;
}

export default () => {
    const endpoint = "https://danielbatata.pythonanywhere.com/events";
    const [data, setData] = useState<EventData[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getDataEndpoint = async () => {
            try {
                const response = await fetch(endpoint);
                if (!response.ok) throw new Error(`Erro: ${response.status}`);

                const result: EventData[] = await response.json();
                setData(result);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        getDataEndpoint();
    }, []);

    const dateFormatter = (date: string) => {
        const dt = new Date(date);
        return `${dt.toLocaleDateString("pt-BR")} - ${dt.toLocaleTimeString(
            "pt-BR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        )}H`;
    };

    return (
        <section
            className="container"
            id="horarios"
            style={{ textAlign: "center" }}
        >
            <h1>Eventos e horários</h1>

            {loading && <p>Carregando eventos...</p>}
            {error && (
                <p>
                    Não temos eventos nesse momento <br />
                    {error}
                </p>
            )}

            {!loading && !error && data.length > 0 ? (
                <article className="division">
                    {data.map((event, index) => (
                        <fieldset
                            key={index}
                            style={{
                                backgroundImage: `url('${event.imgOpacity}')`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}
                        >
                            <legend>{event.title}</legend>
                            <p>
                                <strong>{dateFormatter(event.date)}</strong>
                            </p>
                            <p>{event.text}</p>
                            <p>
                                <strong>Tema: </strong>
                                <em>{event.about}</em>
                            </p>
                        </fieldset>
                    ))}
                </article>
            ) : (
                <article>
                    <p>Não temos eventos no momento</p>
                </article>
            )}
        </section>
    );
};
