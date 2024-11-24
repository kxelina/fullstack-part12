const mongoose = require('mongoose');
const Todo = require('./models/Todo');
const { MONGO_URL } = require('../util/config');

console.log('MONGO_URL:', MONGO_URL);
console.log('mongoose.connection.readyState:', mongoose.connection.readyState);

if (MONGO_URL && !mongoose.connection.readyState) {
  mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));
}

module.exports = {
  Todo
};
