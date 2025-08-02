const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:  "A importância da leitura na formação pessoal",
        alternativas: [
            {
                texto: "A leitura estimula o pensamento crítico e amplia o vocabulário. Ao entrar em contato com diferentes ideias, o leitor desenvolve empatia e compreensão sobre o mundo ao seu redor.",
                afirmacao: ["A leitura contribui para o desenvolvimento do pensamento crítico",
                    "O vocabulário de uma pessoa pode ser ampliado por meio da leitura.",
                    "Ler ajuda a compreender melhor outras culturas e realidades."
                ]
            },
            {
                texto: "Desde cedo, o hábito da leitura pode influenciar positivamente o desempenho escolar. Crianças que leem com frequência tendem a ter mais facilidade na escrita e interpretação de textos.",
                afirmacao: ["O hábito da leitura desde a infância melhora o desempenho escolar.",
                    "Crianças leitoras desenvolvem melhor a escrita.",
                    "- A leitura frequente facilita a interpretação de textos."

                ]
            }           
            
        ]
    },
    {
        enunciado: "O impacto das ações humanas no meio ambiente",
        alternativas: [
            {
                texto:"A poluição causada por indústrias e veículos afeta diretamente a qualidade do ar. Isso pode gerar problemas respiratórios e contribuir para o aquecimento global.",
                afirmacao:["- A poluição industrial prejudica a qualidade do ar.",
                    "Problemas respiratórios podem ser causados pela poluição.",
                    "A emissão de gases contribui para o aquecimento global."

                ]
            },
            {
                texto: "O desmatamento compromete a biodiversidade e altera o equilíbrio dos ecossistemas. Sem árvores, há maior risco de erosão e perda de habitats naturais.",
                afirmacao:["O desmatamento ameaça a biodiversidade.",
                    "- A ausência de árvores aumenta o risco de erosão."

                ]
            }
        ]
    },
    {
        enunciado:  "A influência da tecnologia na vida cotidiana",
        alternativas: [
            {
                texto:"A tecnologia facilita tarefas diárias como pagar contas, estudar e se comunicar. Com smartphones e aplicativos, é possível resolver problemas sem sair de casa.",
                afirmacao:["- A tecnologia ajuda a realizar tarefas do dia a dia.",
                    "- Aplicativos permitem resolver problemas remotamente."
                ]
            },
            {
                texto:"Apesar dos benefícios, o uso excessivo de tecnologia pode causar dependência e isolamento social. É importante equilibrar o tempo online com atividades presenciais.",
                afirmacao:["O uso excessivo de tecnologia pode gerar dependência.",
                    "É necessário equilibrar o tempo online com o convívio presencial."
                ]
            }
            
        ]
    },
    {
        enunciado: "O papel da escola na formação cidadã",
        alternativas: [
            {
                texto:"A escola é um espaço de aprendizado e convivência. Além de ensinar conteúdos acadêmicos, ela promove valores como respeito, solidariedade e responsabilidade.",
                afirmacao:["A escola ensina mais do que conteúdos acadêmicos.",
                    "Valores como respeito são promovidos no ambiente escolar."

                ]
            },
            {
                texto:"Projetos escolares que envolvem a comunidade ajudam os alunos a entenderem seu papel social. A participação ativa desenvolve senso de responsabilidade e empatia.",
                afirmacao:["Projetos escolares podem envolver a comunidade.",
                    "- A participação ativa desenvolve responsabilidade."
                ]
            }
            
        ]
    },
    {
        enunciado: "A arte como forma de expressão e transformação",
        alternativas: [
            {
                texto: "A arte permite que as pessoas expressem sentimentos e ideias de forma criativa. Pinturas, músicas e danças revelam emoções que muitas vezes não são ditas com palavras..",
                afirmacao:["A arte é uma forma de expressão emocional.",
                    "- Sentimentos podem ser comunicados por meio da arte."
                ]
            },
            {
                texto: "Em comunidades vulneráveis, projetos artísticos podem transformar realidades. A arte promove inclusão, autoestima e novas oportunidades para jovens.",
                afirmacao:["A arte pode transformar comunidades vulneráveis.",
                    "- Projetos artísticos promovem inclusão social."
                ]
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatorio(lista){
    const posicao = Math.floor(Math.random()* lista.lenght);
    return lista[posicao];
}

mostraPergunta();