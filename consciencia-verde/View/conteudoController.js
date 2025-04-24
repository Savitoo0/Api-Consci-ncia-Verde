const conteudos = require('../Model/conteudoModel');

exports.getTodos = (req, res) => {
    res.json(conteudos);
};

exports.getPorId = (req, res) => {
    const conteudo = conteudos.find(c => c.id === parseInt(req.params.id));
    if (!conteudo) return res.status(404).json({ error: 'Conteúdo não encontrado' });
    res.json(conteudo);
};

exports.curtir = (req, res) => {
    const conteudo = conteudos.find(c => c.id === parseInt(req.params.id));
    if (!conteudo) return res.status(404).json({ error: 'Conteúdo não encontrado' });

    conteudo.curtidas += 1;
    res.json(conteudo);
};

exports.comentar = (req, res) => {
    const conteudo = conteudos.find(c => c.id === parseInt(req.params.id));
    if (!conteudo) return res.status(404).json({ error: 'Conteúdo não encontrado' });

    const { comentario } = req.body;
    conteudo.comentarios.push(comentario);
    res.status(201).json({ message: 'Comentário adicionado', conteudo });
};

exports.getComentarios = (req, res) => {
    const conteudo = conteudos.find(c => c.id === parseInt(req.params.id));
    if (!conteudo) return res.status(404).json({ error: 'Conteúdo não encontrado' });

    res.json(conteudo.comentarios);
};
