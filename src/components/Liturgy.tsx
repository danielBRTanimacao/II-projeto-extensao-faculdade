import { useEffect, useState } from "react";

export default () => {
    const endpoint = "https://liturgia.up.railway.app";
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getDataEndpoint();
    }, []);

    const getDataEndpoint = async () => {
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error(`Erro: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container" id="liturgia">
            <div>
                <h2>Liturgia Diária</h2>
                {error && <p style={{ color: "red" }}>Erro: {error}</p>}
                {loading ? (
                    <p>Carregando...</p>
                ) : data ? (
                    <div>
                        <h4>{data.liturgia}</h4>
                        <p>
                            <strong>Data:</strong> {data.data}
                        </p>
                        <p>
                            <strong>Cor:</strong> {data.cor}
                        </p>
                        <p>
                            <strong>Dia:</strong> {data.dia}
                        </p>
                        <p>
                            <strong>Oferendas:</strong> {data.oferendas}
                        </p>
                        <p>
                            <strong>Comunhão:</strong> {data.comunhao}
                        </p>

                        {/* Primeira Leitura */}
                        {data.primeiraLeitura && (
                            <div>
                                <h3>Primeira Leitura</h3>
                                <p>
                                    <strong>Referência:</strong>{" "}
                                    {data.primeiraLeitura.referencia}
                                </p>
                                <p>
                                    <strong>Título:</strong>{" "}
                                    {data.primeiraLeitura.titulo}
                                </p>
                                <p>{data.primeiraLeitura.texto}</p>
                            </div>
                        )}

                        {/* Segunda Leitura */}
                        {data.segundaLeitura &&
                            data.segundaLeitura !==
                                "Não há segunda leitura hoje!" && (
                                <div>
                                    <h3>Segunda Leitura</h3>
                                    <p>{data.segundaLeitura}</p>
                                </div>
                            )}

                        {/* Salmo Responsorial */}
                        {data.salmo && (
                            <div>
                                <h3>Salmo Responsorial</h3>
                                <p>
                                    <strong>Referência:</strong>{" "}
                                    {data.salmo.referencia}
                                </p>
                                <p>
                                    <strong>Refrão:</strong> {data.salmo.refrao}
                                </p>
                                <p>{data.salmo.texto}</p>
                            </div>
                        )}

                        {/* Evangelho */}
                        {data.evangelho && (
                            <div>
                                <h3>Evangelho</h3>
                                <p>
                                    <strong>Referência:</strong>{" "}
                                    {data.evangelho.referencia}
                                </p>
                                <p>
                                    <strong>Título:</strong>{" "}
                                    {data.evangelho.titulo}
                                </p>
                                <p>{data.evangelho.texto}</p>
                            </div>
                        )}

                        {/* Antífonas */}
                        {data.antifonas && (
                            <div>
                                <h3>Antífonas</h3>
                                <p>
                                    <strong>Entrada:</strong>{" "}
                                    {data.antifonas.entrada}
                                </p>
                                <p>
                                    <strong>Comunhão:</strong>{" "}
                                    {data.antifonas.comunhao}
                                </p>
                            </div>
                        )}
                    </div>
                ) : (
                    <p>Nenhum dado disponível.</p>
                )}
            </div>
        </section>
    );
};
