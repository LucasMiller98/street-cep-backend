const mongoose = require('mongoose')

class Connection {
  constructor() {
    this.dataBaseConnectionMongoDB()
  }

  dataBaseConnectionMongoDB() {
    this.mongoDBConnection = mongoose.connect('mongodb+srv://LucasMiller98:MillerDo@cluster0.gzc2q.mongodb.net/postal-code-users', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }).then(() => {
      console.log('Connect with successful!')
    }).catch((error) => {
      console.error(`Failed: ${error}`)
    })
  }
}

module.exports = new Connection()