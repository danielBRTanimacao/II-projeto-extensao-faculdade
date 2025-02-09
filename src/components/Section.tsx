import ImgIgreja from "../assets/imgs/icon-image.png";

export default () => {
    return (
        <section id="cabecalho">
            <div className="container">
                <h3>Educação cristã</h3>
                <h1>Secretaria igreja</h1>
                <p className="lead small-lead">
                    "A educação ilumina a mente, e a fé fortalece o coração. Com
                    Deus como guia, o conhecimento se transforma em sabedoria
                    para servir ao próximo."
                </p>
                <cite>~ Autor desconhecido</cite>
                <div className="img-principal">
                    <img src={ImgIgreja} alt="img-igreja" />
                </div>
            </div>
        </section>
    );
};
