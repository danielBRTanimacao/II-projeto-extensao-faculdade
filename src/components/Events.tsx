import EventsJson from "../assets/json/events.json";

export default () => {
    return (
        <section
            className="container"
            id="horarios"
            style={{ textAlign: "center" }}
        >
            <h1>Eventos e horários</h1>
            <article className="division">
                {EventsJson.map((e, index) => (
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
        </section>
    );
};
