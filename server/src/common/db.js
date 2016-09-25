let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {
  db: { native_parser: true },
  server: { poolSize: 5 }
});

// Debug mode
mongoose.set('debug', true);

mongoose.Promise = global.Promise;

module.exports = mongoose;