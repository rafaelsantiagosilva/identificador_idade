function concluir(){
    // pegando ano atual
    var data = new Date();
    var ano = data.getFullYear();

    // pegando ano do formulário
    var fAno = document.getElementById('txtano').value;

    // pegando o resultado
    var resultado = document.querySelector('h2#res');
    var imagem = document.querySelector('img');

    if(fAno.length == 0 || fAno > ano){
        alert("ERRO - Verifique os dados e tente novamente");
    } else {
        var fSex = document.getElementsByName('radsex');
        var idade = ano - fAno;
        var genero;
        if(fSex[0].checked){
            genero = "um homem";

            if(idade >= 0 && idade < 4){
                imagem.setAttribute('src', './src/img/nenemmasc.jpg');
            } else if(idade < 12){
                imagem.setAttribute('src', './src/img/criancamasc.jpg');
            } else if(idade < 18){
                imagem.setAttribute('src', './src/img/adolescentemasc.jpg');
            } else if(idade < 40){
                imagem.setAttribute('src', './src/img/adultojovemmasc.jpg');
            } else if(idade < 60){
                imagem.setAttribute('src', './src/img/meiaidademasc.jpg');
            } else if(idade < 200){
                imagem.setAttribute('src', './src/img/idosomasc.jpg');
            } else {
                imagem.setAttribute('src', './src/img/fossil.jpg');
            }
        } 
        
        if(fSex[1].checked) {
            genero = "uma mulher";

            if(idade >= 0 && idade < 4){
                imagem.setAttribute('src', './src/img/nenemfem.jpg');
            } else if(idade < 12){
                imagem.setAttribute('src', './src/img/criancafem.jpg');
            } else if(idade < 18){
                imagem.setAttribute('src', './src/img/adolescentefem.jpg');
            } else if(idade < 40){
                imagem.setAttribute('src', './src/img/adultojovemfem.jpg');
            } else if(idade < 60){
                imagem.setAttribute('src', './src/img/meiaidadefem.jpg');
            } else if(idade < 200){
                imagem.setAttribute('src', './src/img/idosofem.jpg');
            } else {
                imagem.setAttribute('src', './src/img/fossil.jpg');
            }
        }
        
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
}
}

// Foto de Victoria Rain: https://www.pexels.com/pt-br/foto/bebe-sorridente-deitado-no-tapete-branco-1648377/
// Foto de Sam Rana: https://www.pexels.com/pt-br/foto/crianca-deitada-na-almofada-de-la-rosa-1442005/

// Foto de Julia M Cameron: https://www.pexels.com/pt-br/foto/garoto-menino-rapaz-computador-4144099/
// Foto de Monstera: https://www.pexels.com/pt-br/foto/menina-negra-meditando-na-sala-com-os-olhos-fechados-5063313/

// Foto de cottonbro studio: https://www.pexels.com/pt-br/foto/adulto-conselhos-orientacoes-assistencia-4100420/
// Foto de Helene Dötsch: https://www.pexels.com/pt-br/foto/adolescencia-juventude-penteado-maquiagem-16962488/

// Foto de Chloe: https://www.pexels.com/pt-br/foto/homem-de-camisa-social-branca-segurando-um-paleto-1043474/
// Foto de Aizhana Aldanova: https://www.pexels.com/pt-br/foto/mulher-vestindo-camisa-branca-e-saia-amarela-sentada-na-escada-de-tijolos-de-concreto-marrom-983564/

// Foto de Amina Filkins: https://www.pexels.com/pt-br/foto/homem-sorridente-com-piano-moderno-na-sala-de-estar-5424638/
// Foto de Darina Belonogova: https://www.pexels.com/pt-br/foto/executiva-empresaria-elegante-tendencia-7959649/

// Foto de Andrea Piacquadio: https://www.pexels.com/pt-br/foto/homem-de-jaqueta-preta-com-fones-de-ouvido-pretos-3831645/
// Foto de Italo Melo: https://www.pexels.com/pt-br/foto/mulher-com-vestido-rosa-segurando-frutas-1786258/