const User = require('../Models/User')

class Controllers {

  show(_, res) {
    let users = [
      "Lucas",
      "Miller",
      'Santos'
    ]
    return res.status(200).json({
      error: false,
      users
    })
  }

  async store(req, res) {
    const { name, email, password } = req.body

    const data = { // models
      name, 
      email,
      password
    }

    await User.create(dados, (error) => {
      if(error) return res.status(400).json({
        error: true,
        message: 'Erro ao tentar inserir algum usuário no banco de dados.'
      }) 

      return res.status(200).json({ // caso não dê error na requisição
        error: false,
        message: 'Usuário cadastrado com sucesso'
      })
    }) // inseri dados no mondoDB

  }
}

module.exports= new Controllers()