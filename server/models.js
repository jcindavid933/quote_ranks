const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quote_ranks');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

var AuthorSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 3},
  quotes: [{type: Schema.Types.ObjectId, ref: 'Quote'}]
}, {timestamps: {created_at: 'created_at', updated_at: 'updated_at'}});

var QuoteSchema = new mongoose.Schema({
  _author: {type: Schema.Types.ObjectId, ref: 'Author'},
  votes: {type: Number, default: '0'},
  quote: {type: String, required: true, minlength: 3},
}, {timestamps: {created_at: 'created_at', updated_at: 'updated_at'}});

mongoose.model('Author', AuthorSchema);
mongoose.model('Quote', QuoteSchema);

module.exports = {
  Author: mongoose.model('Author'),
  Quote: mongoose.model('Quote')
}
