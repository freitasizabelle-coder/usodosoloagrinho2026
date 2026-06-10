const impactosPositivos = [
    "Menos 1 kg de CO2 na atmosfera a cada alimento consumido direto da horta local.",
    "Aproveitamento de telhados e terrenos baldios reduz a temperatura do bairro em até 2°C.",
    "Economia de até 70% de água ao usar sistemas de irrigação por gotejamento urbano.",
    "Fortalecimento da economia local gerando renda para produtores da própria comunidade.",
    "Estímulo à saúde mental de quem pratica o manejo da terra no dia a dia estressante da cidade."
];

const botao = document.getElementById('btn-calcular');
const elementoMensagem = document.getElementById('mensagem-impacto');

botao.addEventListener('click', () => {
    const indice = Math.floor(Math.random() * impactosPositivos.length);
    elementoMensagem.textContent = impactosPositivos[indice];
});
