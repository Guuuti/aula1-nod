import PromptSync from "prompt-sync"

const prompt = PromptSync()


//const prompt = require("prompt-sync")() import promptsync subistitui 
//const temp = Number(prompt("Digite a temperatura: "))
//prompt('"Digite"')
// if(temp > 38)console.log("Febre")
// else if (temp < 30) console.log("F no chat")
// else console.log("Tudo ok")

const salario = prompt("Digite seu salário: ")
const procentagem = Number(prompt("Digite a procentagem de aumento: "))

let result = salario*((procentagem/100)+1)

console.log(`Seu salário atualizado é: ${result}!`)


