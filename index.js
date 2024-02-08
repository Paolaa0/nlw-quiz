


const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "v myVar;"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dessas opções não é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "string",
        "object",
        "function"
      ],
      correta: 1
    },
    {
      pergunta: "Como você acessa o segundo elemento de um array chamado 'myArray' em JavaScript?",
      respostas: [
        "myArray(1)",
        "myArray[1]",
        "myArray.second"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "removeLast()",
        "pop()",
        "sliceLast()"
      ],
      correta: 1
    },
    {
      pergunta: "Como você verifica se uma variável é do tipo número em JavaScript?",
      respostas: [
        "typeof myVar === 'number'",
        "myVar.type === 'number'",
        "isNumber(myVar)"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 5; i++)",
        "for (i < 5; i++)",
        "for (var i = 0; i < 5; i++)"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "addToEnd()"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'parseInt()' faz em JavaScript?",
      respostas: [
        "Converte uma string em um número inteiro",
        "Converte um número em uma string",
        "Remove espaços em branco de uma string"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Verifica se duas variáveis são do mesmo tipo",
        "Verifica o tipo de uma variável",
        "Define o tipo de uma variável"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totaldePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totaldePerguntas
  
  for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
     mostrarTotal.textContent = corretas.size + ' de ' + totaldePerguntas
    }
  
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  
  quiz.appendChild(quizItem)
  }