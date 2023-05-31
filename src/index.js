const express = require('express')
const handlebars = require('express-handlebars').engine

const app = express()

const pageExtensao = "hbs" 
// define o nome da extensão dos arquivos
app.use(express.static('public'))
//Mudei a localização da pasta views
app.set("views", "./src/views")

//Define a extensão dos arquivos, define o layout padrão
app.engine(pageExtensao, handlebars({
    defaultLayout: "main",
}))
app.set("view engine", pageExtensao)

app.get('/', function(req, res){
    res.render('index')
})

app.listen(8081, ()=> {
    console.log('Server funfante, Jaaj')
})