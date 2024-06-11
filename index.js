let NomeHeroi = WellJackson
let experienciaXP = 1000

// estrutura de decisão

let mensagem;

if (experienciaXP < 1000){
    mensagem = "Ferro";
} else if (experienciaXP >= 1001 && experienciaXP <= 2000){
    mensagem = "Bronze"
} else if (experienciaXP >=2001 && experienciaXP <= 5000){
    mensagem = "Prata"
} else if (experienciaXP >= 5001 && experienciaXP <= 7000){
    mensagem = "Ouro"
} else if (experienciaXP >= 7001 && experienciaXP >= 8000){
    mensagem = "Platina"
} else if (experienciaXP >= 8001 && experienciaXP >= 9000){
    mensagem = "Ascendente"
} else if (experienciaXP >= 9001 && experienciaXP >= 10.000){
    mensagem = "Imortal"
} else if (experienciaXP >= 10.001){
    mensagem = "Radiante"
}

// mensagem que irá aparecer

console.log ("O herói com o nome {nomeHeroi} está no nível de {experienciaXP}")
