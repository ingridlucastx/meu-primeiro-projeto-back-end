const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333 

const mulheres = [
  {
    nome:"Ingrid Lucas",
    imagem: "https://l1nq.com/s1kTv",
    minibio: "Analista de Projetos e UX Designer Jr"

  },
  {
    nome: "Iana Chan",
    imagem:"https://l1nk.dev/eqoHB",
    minibio: "Fundadora da Programaria"

  },

  {
    nome: "Nina da Hora",
    imagem: "https://l1nk.dev/iUeMA",
    minibio: "Hacker antiracista"
  }
]

function mostraMulheres(request, response){
  response.json(mulheres)

}
function mostraPorta()  {
  console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres",mostraMulheres))
app.listen(porta, mostraPorta)
