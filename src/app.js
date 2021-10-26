// Arquivo que vai iniciar a aplicação

const express = require('express')
const cors = require('cors')
const routes = require('./router')
const morgan = require('morgan')
require('./config/connection') // inicia o bando de dados

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(morgan('dev')) // "dev" trás informaçoes sobre requisição
    
    this.app.use((_, res, next) => { // para validar algum dado
      res.header('Access-Controll-Allow-Origin', '*')
      res.header('Access-Controll-Allow-Methods', 'GET, POST, PUT, DELETE') // métodos que são aceitos
      res.header('Access-Controll-Allow-Headers', 'Access, Content-type, Authorization, Acept, Origin, X-Requested-With') // Aceita cabeçalhos
      this.app.use(cors())
      next()
    })
  }

  routes() {
    this.app.use(routes)    
  }
}

module.exports = new App().app