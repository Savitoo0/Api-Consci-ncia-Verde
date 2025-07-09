import './ContentSection.css';

const ContentSection = ({ conteudos }) => {
  return (
    <section className="content-section">
      {conteudos.map(conteudo => (
        <div className="content-card" key={conteudo.id}>
          <h2>{conteudo.titulo}</h2>
          <p>{conteudo.descricao}</p>
          <button>Curtir</button>
          <button>Comentar</button>
        </div>
      ))}
    </section>
  );
}

export default ContentSection;
