const mongoose = require('mongoose')

const User = mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },

    email: {
      type: String,
      require: true
    },

    password: {
      type: String,
      require: true
    },
  },

  {
    timesTamps: true, // CreateAt/updateAt
  }
)

// no bd ele vai ficar minusculo 
module.exports = mongoose.model('user', User)
