import { useEffect, useState } from "react";

export default function LiturgiaDiaria() {
    const endpoint = "https://liturgia.up.railway.app";
    const [data, setData] = useState<Record<string, any> | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(endpoint)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erro: ${response.status}`);
                }
                return response.json();
            })
            .then(setData)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="container" id="liturgia">
            <h1 style={{ padding: "2em 0 1em" }}>Liturgia Diária</h1>
            {error && <p style={{ color: "red" }}>Erro: {error}</p>}
            {loading ? (
                <p>Carregando...</p>
            ) : data ? (
                <div>
                    <h2>
                        📅 {data.data} - {data.liturgia}
                    </h2>
                    <p>
                        <strong>Cor Litúrgica:</strong> {data.cor}
                    </p>

                    <h3>🙏 Oração do Dia</h3>
                    <p>{data.dia}</p>

                    <h3>🍷 Oferendas</h3>
                    <p>{data.oferendas}</p>

                    <h3>🍞 Comunhão</h3>
                    <p>{data.comunhao}</p>

                    <h3>📖 Primeira Leitura</h3>
                    <p>
                        <strong>{data.primeiraLeitura?.referencia}</strong> -{" "}
                        {data.primeiraLeitura?.titulo}
                    </p>
                    <p>{data.primeiraLeitura?.texto}</p>

                    <h3>📖 Segunda Leitura</h3>
                    <p>
                        <strong>{data.segundaLeitura?.referencia}</strong> -{" "}
                        {data.segundaLeitura?.titulo}
                    </p>
                    <p>{data.segundaLeitura?.texto}</p>

                    <h3>🎶 Salmo Responsorial</h3>
                    <p>
                        <strong>{data.salmo?.referencia}</strong>
                    </p>
                    <p>
                        <em>{data.salmo?.refrao}</em>
                    </p>
                    <p>{data.salmo?.texto}</p>

                    <h3>✝️ Evangelho</h3>
                    <p>
                        <strong>{data.evangelho?.referencia}</strong> -{" "}
                        {data.evangelho?.titulo}
                    </p>
                    <p>{data.evangelho?.texto}</p>

                    <h3>🎼 Antífonas</h3>
                    <p>
                        <strong>Entrada:</strong> {data.antifonas?.entrada}
                    </p>
                    <p>
                        <strong>Comunhão:</strong> {data.antifonas?.comunhao}
                    </p>
                </div>
            ) : (
                <p>Nenhum dado disponível.</p>
            )}
        </section>
    );
}
