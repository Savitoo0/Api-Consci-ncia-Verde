const listas = require('../Model/listaModel');
const conteudos = require('../Model/conteudoModel');

exports.criarLista = (req, res) => {
    const { titulo } = req.body;
    const novaLista = { id: listas.length + 1, titulo, conteudos: [] };
    listas.push(novaLista);
    res.status(201).json(novaLista);
};

exports.adicionarConteudo = (req, res) => {
    const lista = listas.find(l => l.id === parseInt(req.params.id));
    const conteudo = conteudos.find(c => c.id === parseInt(req.params.conteudoId));

    if (!lista) return res.status(404).json({ error: 'Lista não encontrada' });
    if (!conteudo) return res.status(404).json({ error: 'Conteúdo não encontrado' });

    lista.conteudos.push(conteudo);
    res.json(lista);
};

exports.getLista = (req, res) => {
    const lista = listas.find(l => l.id === parseInt(req.params.id));
    if (!lista) return res.status(404).json({ error: 'Lista não encontrada' });

    res.json(lista.conteudos);
};
