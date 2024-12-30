import "./Doe.css";

const Doe = () => {
  return (
    <div className="doe-container">
      <h1 className="doe-title">Faça a Diferença: Doe Agora!</h1>
      <p className="doe-description">
        Sua doação pode transformar vidas e contribuir para um futuro mais
        sustentável. Junte-se ao Portal ECO e apoie essa causa!
      </p>

      <div className="doe-content">
        <div className="doe-section">
          <h2>Benefícios das Doações</h2>
          <ul>
            <li>Fortalecer iniciativas de reciclagem e educação ambiental.</li>
            <li>Ampliar campanhas de plantio de árvores.</li>
            <li>
              Proporcionar palestras gratuitas para comunidades.
            </li>
            <li>Garantir materiais e recursos para ações sustentáveis.</li>
          </ul>
        </div>

        <div className="doe-section">
          <h2>Dificuldades da ONG</h2>
          <ul>
            <li>Falta de recursos financeiros para ampliar as ações.</li>
            <li>Dificuldade em alcançar comunidades mais distantes.</li>
            <li>Necessidade de equipamentos para projetos sustentáveis.</li>
            <li>Escassez de voluntários para apoiar as iniciativas.</li>
          </ul>
        </div>
      </div>

      <a
          href="https://sosamazonia.org.br/doe"
          className="doe-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Doe Agora
        </a>
    </div>
  );
};

export default Doe;
