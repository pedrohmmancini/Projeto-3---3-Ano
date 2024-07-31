const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você chegou em casa depois da escola e decidiu não estudar. Qual a sua desculpa?",
        alternativas: [
            {
                texto: "Vou jogar videogame o dia todo.",
                afirmacao: "Passou o dia jogando videogame e não aprendeu nada novo."
            },
            {
                texto: "Vou assistir TV e descansar.",
                afirmacao: "Assistiu TV o dia todo e não fez nenhum dever."
            }
        ]
    },
    {
        enunciado: "No dia seguinte, você tem uma prova importante. O que você faz?",
        alternativas: [
            {
                texto: "Não estudo e vou dormir tarde.",
                afirmacao: "Foi mal na prova por não estar preparado e estar cansado."
            },
            {
                texto: "Estudo um pouco, mas passo mais tempo nas redes sociais.",
                afirmacao: "Se distraiu nas redes sociais e não conseguiu estudar o suficiente."
            }
        ]
    },
    {
        enunciado: "Sua mãe percebe que suas notas estão baixas e decide conversar com você. Como você reage?",
        alternativas: [
            {
                texto: "Prometo que vou melhorar, mas não mudo meus hábitos.",
                afirmacao: "Continua com as mesmas atitudes e suas notas não melhoram."
            },
            {
                texto: "Fico bravo e digo que não preciso estudar.",
                afirmacao: "A discussão com sua mãe piora a situação e você continua sem estudar."
            }
        ]
    },
    {
        enunciado: "Um amigo te convida para estudar junto. O que você faz?",
        alternativas: [
            {
                texto: "Recuso o convite e vou jogar videogame.",
                afirmacao: "Perdeu a oportunidade de aprender com seu amigo e continua com dificuldades na escola."
            },
            {
                texto: "Aceito, mas não presto atenção no estudo.",
                afirmacao: "Mesmo estando com seu amigo, não aprendeu nada por não prestar atenção."
            }
        ]
    },
    {
        enunciado: "Chega o fim do semestre e você precisa melhorar suas notas para passar de ano. Qual sua decisão?",
        alternativas: [
            {
                texto: "Continuo sem estudar e espero que dê tudo certo.",
                afirmacao: "Infelizmente, reprovou o ano por não ter se esforçado."
            },
            {
                texto: "Faço um esforço de última hora para tentar passar.",
                afirmacao: "Embora tenha se esforçado no final, o tempo perdido foi demais e não conseguiu recuperar."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
