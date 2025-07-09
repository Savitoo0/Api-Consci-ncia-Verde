import axios from 'axios';

const API_URL = 'http://localhost:5405'; // Substitua pela sua URL

export const fetchConteudos = async () => {
  try {
    const response = await axios.get(`${API_URL}/conteudos`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar conteudos:", error);
    return []; // Retorna um array vazio em caso de erro
  }
};

export const fetchListas = async () => {
  try {
    const response = await axios.get(`${API_URL}/listas`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar listas:", error);
    return []; // Retorna um array vazio em caso de erro
  }
};

// Adicione outras funções fetch para as outras rotas GET aqui...
export const fetchOtherData = async () => {
    try {
        const response = await axios.get(`${API_URL}/outraRota`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar outraRota:", error);
        return []; // Retorna um array vazio em caso de erro
    }
};
