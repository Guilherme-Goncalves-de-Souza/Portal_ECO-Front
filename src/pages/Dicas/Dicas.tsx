// Importe as imagens no topo do arquivo
import recicleLixo from "../../../images/recicle_lixo.jpg";
import energia from "../../../images/energia.jpg";
import menosPlastico from "../../../images/menos_plastico.jpg";
import co2 from "../../../images/co2.jpg";
import reciclando from "../../../images/reciclando.jpeg";
import arvore from "../../../images/arvore.png";
import agua from "../../../images/agua.jpg";

import "./Dicas.css";

const Dicas = () => {
  const dicas = [
    {
      id: 1,
      titulo: "Vamos Reciclar!",
      descricao: "Participe de programas de reciclagem do Portal ECO.",
      imagem: recicleLixo,
    },
    {
      id: 2,
      titulo: "Cuide da Energia!",
      descricao:
        "Desligue os aparelhos eletrônicos da tomada quando não estiverem em uso.",
      imagem: energia,
    },
    {
      id: 3,
      titulo: "Menos Plástico!",
      descricao:
        "Prefira produtos a granel para evitar embalagens desnecessárias.",
      imagem: menosPlastico,
    },
    {
      id: 4,
      titulo: "⚠️CO2⚠️",
      descricao:
        "Utilize transporte público, bicicleta ou carona sempre que possível.",
      imagem: co2,
    },
    {
      id: 5,
      titulo: "Faça como nós!",
      descricao: "Participe de programas de reciclagem do Portal ECO.",
      imagem: reciclando,
    },
    {
      id: 6,
      titulo: "Ajude a criar novas árvores.",
      descricao:
        "Plante uma árvore e ajude a aumentar as áreas verdes do planeta.",
      imagem: arvore,
    },
    {
      id: 7,
      titulo: "Economize ÁGUA!",
      descricao:
        "Economize água: reutilize a água da chuva para regar plantas.",
      imagem: agua,
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
