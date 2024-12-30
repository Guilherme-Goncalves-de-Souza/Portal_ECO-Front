import "./Palestras.css";

const Palestras = () => {
  const palestras = [
    {
      id: 1,
      titulo: "A Importância da Reciclagem",
      vagas: 50,
      data: "25/03/2025",
      horario: "18:00 - 20:00",
      link: "",
      local: "A definir",
    },
    {
      id: 2,
      titulo: "Mudanças Climáticas e Sustentabilidade",
      vagas: 50,
      data: "28/03/2025",
      horario: "18:00 - 20:00",
      link: "https://meet.google.com/landing?pli=1",
      local: "online via Meet",
    },
    {
      id: 3,
      titulo: "Práticas Sustentáveis no Dia a Dia",
      vagas: 50,
      data: "31/03/2025",
      horario: "18:00 - 20:00",
      link: "https://meet.google.com/landing?pli=1",
      local: "online via Meet",
    },
  ];

  return (
    <div className="container">
      <h1 className="palestras-title">Próximas Palestras</h1>
      {palestras.map((palestra) => (
        <div className="palestra-card" key={palestra.id}>
          <div className="palestra-info">
            <h2>{palestra.titulo}</h2>
            <p>
              <strong>Vagas:</strong> {palestra.vagas}
            </p>
            <p>
              <strong>Data:</strong> {palestra.data}
            </p>
            <p>
              <strong>Horário:</strong> {palestra.horario}
            </p>
            <p>
                <strong>Local:</strong> {palestra.local}
            </p>
          </div>
          <div className="palestra-action">
            <a
              href={palestra.link}
              className="palestra-button"
              target="_blank"
              rel="noopener noreferrer">
              Inscreva-se
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Palestras;
