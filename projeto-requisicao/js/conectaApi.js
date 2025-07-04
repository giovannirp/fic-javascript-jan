async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possivel enviar o vídeo");
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

// async function buscaVideo(termoDeBusca) {
//     const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
//     const conexaoConvertida = await conexao.json();

//     return conexaoConvertida;
// }

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();

    // Filtra os vídeos que têm o termo no título
    const filtrados = conexaoConvertida.filter(video => 
        video.titulo.toLowerCase().includes(termoDeBusca.toLowerCase())
    );

    return filtrados;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}