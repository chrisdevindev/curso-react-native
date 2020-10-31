const express = require("express") //importamos
const app = express() //atribuímos as funções a variável



app.get('/projeto', (request, response) => {
    return response.json([
       "Projeto 1",
       "Projeto 2"
    ])
 })
 

app.post('/projeto', (request, response)=>{
    return response.json([
        "Projeto 1",
        "projeto 2",
        "Projeto 3"
    ])
})

app.put('/projeto/:id', (request, response) => {
    return response.json([
        "Projeto 4",
        "projeto 2",
        "Projeto 3"
    ])
})
//http://localhost:3333/projeto/4

app.delete('/projeto/:id', (request, response) => {
    return response.json([
        "projeto 2",
        "Projeto 3"
    ])
})


app.listen(3333, () => {
    console.log("Back-end started🚀")
})