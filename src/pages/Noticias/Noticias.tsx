import React, { useEffect, useState } from "react";
import "./Noticias.css"

interface Noticia {
  id: number;
  titulo: string;
  conteudo: string;
  data: string;
}

const Noticias: React.FC = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Buscar as notícias no back-end
    const fetchNoticias = async () => {
      try {
        const response = await fetch("https://portal-eco-back.onrender.com/noticias");
        const data = await response.json();

        if (response.ok) {
          setNoticias(data);
        } else {
          console.error("Erro ao carregar notícias:", data.error);
        }
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div className="noticias">
      <h1>Últimas Notícias</h1>
      {loading ? (
        <p>Carregando notícias...</p>
      ) : noticias.length > 0 ? (
        noticias.map((noticia) => (
          <div key={noticia.id} className="noticia">
            <h2>{noticia.titulo}</h2>
            <p>{noticia.conteudo}</p>
            <small>Data: {noticia.data}</small>
          </div>
        ))
      ) : (
        <p>Nenhuma notícia encontrada.</p>
      )}
    </div>
  );
};

export default Noticias;
