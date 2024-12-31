import "./Dicas.css";

const Dicas = () => {
  const dicas = [
    {
      id: 1,
      titulo: "Vamos Reciclar!",
      descricao: "Participe de programas de reciclagem do Portal ECO.",
      imagem: "../../assets/recicle_lixo.jpg",
    },
    {
      id: 2,
      titulo: "Cuide da Energia!",
      descricao:
        "Desligue os aparelhos eletrônicos da tomada quando não estiverem em uso.",
      imagem: "../../assets/energia.jpg",
    },
    {
      id: 3,
      titulo: "Menos Plástico!",
      descricao:
        "Prefira produtos a granel para evitar embalagens desnecessárias.",
      imagem: "../../assets/menos_plastico.jpg",
    },
    {
      id: 4,
      titulo: "⚠️CO2⚠️",
      descricao:
        "Utilize transporte público, bicicleta ou carona sempre que possível.",
      imagem: "../../assets/co2.jpg",
    },
    {
      id: 5,
      titulo: "Faça como nós!",
      descricao: "Participe de programas de reciclagem do Portal ECO.",
      imagem: "../../assets/reciclando.jpeg",
    },
    {
      id: 6,
      titulo: "Ajude a criar novas árvores.",
      descricao:
        "Plante uma árvore e ajude a aumentar as áreas verdes do planeta.",
      imagem: "../../assets/arvore.png",
    },
    {
      id: 7,
      titulo: "Economize ÁGUA!",
      descricao:
        "Economize água: reutilize a água da chuva para regar plantas.",
      imagem: "../../assets/agua.jpg",
    },
  ];

  return (
    <div className="dicas-container">
      {dicas.map((dica) => (
        <div className="card" key={dica.id}>
          <h2>{dica.titulo}</h2>
          <img src={dica.imagem} alt={dica.titulo} />
          <p>{dica.descricao}</p>
        </div>
      ))}
    </div>
  );
};

export default Dicas;
