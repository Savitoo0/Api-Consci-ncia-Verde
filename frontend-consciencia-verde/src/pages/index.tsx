import React, { useState, useEffect } from 'react';
import { fetchConteudos, fetchListas, fetchOtherData } from '../utils/api';
import Section from '../components/Section';
import ContentSection from '../components/ContentSection'; // Implemente este componente
import ListSection from '../components/ListSection';     // Implemente este componente
import OtherSection from '../components/OtherSection'; // Implemente este componente
import Footer from '@/components/Footer';


const HomePage = () => {
  return (
    <div>
      <ContentSection />
      <ListSection />
      <OtherSection />
      <Footer />
    </div>
  );
};

export default HomePage;

const Home: React.FC = () => {
  const [conteudos, setConteudos] = useState<any[]>([]);
  const [listas, setListas] = useState<any[]>([]);
  const [otherData, setOtherData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [conteudosData, listasData, otherDataData] = await Promise.all([
          fetchConteudos(),
          fetchListas(),
          fetchOtherData(),
        ]);
        setConteudos(conteudosData);
        setListas(listasData);
        setOtherData(otherDataData);
      } catch (err) {
        setError('Erro ao carregar dados da API.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="container mx-auto px-4">
      <Section title="Conteúdos">
        <ContentSection conteudos={conteudos} />
      </Section>
      <Section title="Listas">
        <ListSection listas={listas} />
      </Section>
      <Section title="Outros Dados">
        <OtherSection otherData={otherData} />
      </Section>
    </main>
  );
};

export default Home;
export default HomePage;