'use client';
import { useEffect, useState } from 'react';

interface Conteudo {
  id: number;
  titulo: string;
  descricao: string;
}

export default function Conteudos() {
  const [conteudos, setConteudos] = useState<Conteudo[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/conteudos')
      .then((res) => res.json())
      .then((data) => setConteudos(data));
  }, []);

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-greenEco">Conteúdos Educativos</h2>
      <ul className="space-y-4">
        {conteudos.map((conteudo) => (
          <li key={conteudo.id} className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-semibold">{conteudo.titulo}</h3>
            <p className="text-gray-600">{conteudo.descricao}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ✅ src/app/sections/Comentarios.tsx
'use client';
import { useEffect, useState } from 'react';

interface Comentario {
  id: number;
  autor: string;
  mensagem: string;
}

export default function Comentarios() {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/comentarios')
      .then((res) => res.json())
      .then((data) => setComentarios(data));
  }, []);

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-greenEco">Comentários da Comunidade</h2>
      <ul className="space-y-4">
        {comentarios.map((comentario) => (
          <li key={comentario.id} className="bg-white shadow-md p-4 rounded-xl">
            <p className="text-gray-800 font-medium">{comentario.autor}</p>
            <p className="text-gray-600">{comentario.mensagem}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ✅ src/app/sections/Listas.tsx
'use client';
import { useEffect, useState } from 'react';

interface Lista {
  id: number;
  titulo: string;
  itens: string[];
}

export default function Listas() {
  const [listas, setListas] = useState<Lista[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/listas')
      .then((res) => res.json())
      .then((data) => setListas(data));
  }, []);

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-greenEco">Listas Sustentáveis</h2>
      {listas.map((lista) => (
        <div key={lista.id} className="bg-white shadow-md p-4 rounded-xl mb-6">
          <h3 className="text-xl font-semibold mb-2">{lista.titulo}</h3>
          <ul className="list-disc list-inside">
            {lista.itens.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

// ✅ src/app/sections/Sobre.tsx
export default function Sobre() {
  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-greenEco">Sobre o Projeto</h2>
      <p className="text-gray-700">
        O <strong>Consciência Verde</strong> é uma iniciativa educacional que busca promover a sustentabilidade através da tecnologia.
        Esta plataforma oferece conteúdos, listas práticas e espaço para discussões que ajudam a construir um futuro mais verde.
      </p>
    </section>
  );
}
