const { Router } = require('express')
const routes = new Router()
const Controllers = require('./app/Controllers/Controllers')

routes.post('/user', Controllers.store)
routes.get('/user', Controllers.show)

module.exports = routes