import { useEffect, useState } from "react";

interface LiturgiaData {
    data?: string;
    liturgia?: string;
    cor?: string;
    dia?: string;
    comunhao?: string;
    referencia?: string;
    titulo?: string;
    texto?: string;
}

export default () => {
    const endpoint = "https://liturgia.up.railway.app";
    const [data, setData] = useState<LiturgiaData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getDataEndpoint();
    }, []);

    const getDataEndpoint = async () => {
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error(`Erro: ${response.status}`);
            }
            const result: LiturgiaData = await response.json();
            setData(result);
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <section className="container">
            <div>
                <h2>Liturgia Diária</h2>
                {error && <p>Erro: {error}</p>}
                {!data ? (
                    <p>Carregando...</p>
                ) : (
                    <div>
                        <h3>{data.liturgia}</h3>
                        <h4>{data.titulo}</h4>
                        <p>{data.data}</p>
                        <p>{data.dia}</p>
                        <p>{data.comunhao}</p>
                        <p>{data.texto}</p>
                    </div>
                )}
            </div>
        </section>
    );
};
