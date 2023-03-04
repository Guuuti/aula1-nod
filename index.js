import PromptSync from "prompt-sync"
import chalk from "chalk"
const prompt = PromptSync()

const j = prompt("Digite quantos valores vai inserir: ")
const valores = []
let soma = 0;

for (let i = 0; i <j; i++){

valores[i] = Number(prompt((chalk.bgBlue(`Digite o valor ${i+1}: `))))
soma = soma + valores[i]
}

const result = soma/j
console.log(chalk.bgBlue(`A média é: ${result}!`))




