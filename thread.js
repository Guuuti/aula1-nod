import PromptSync from "prompt-sync"

const prompt = PromptSync()


const nasc = Number (prompt("Digite o ano que você nasceu: "))

let result = 2023-nasc

if (result < 18)console.log("Você não pode tirar a carteira de motorista, espere um pouco")
else console.log("Você pode tirar a carta, só vai")

// console.log(`Você está apto a ter a caterira de motorista ${result}!`)
