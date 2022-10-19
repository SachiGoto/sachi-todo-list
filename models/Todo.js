const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
// naming the model as 'todo'
// * If you don't specify a collection name, mongoDB will take the model name and make it to plural 
// the model that uses a blueprint called TodoSchema is Todo


