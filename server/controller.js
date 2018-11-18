var Models = require('./models.js');

module.exports = {
  authors: function(request,response){
    Models.Author.find({}, function(err, author){
      if(err){
        response.json({errors: err});
      }
      else{
        response.json(author);
      }
    }).sort({_id: -1});
  },

  quotes: function(request, response){
    Models.Quote.find({_author: request.params.id}, function(err, quotes){
      if (err){
        response.json({errors: err});
      }
      else{
        response.json(quotes);
      }
    })
  },

  create_quote: function(request, response){
    Models.Author.findById({_id: request.params.id}, function(err, author){
      var quote = new Models.Quote(request.body);
      quote._author = author._id;
      author.quotes.push(quote);
      console.log(author);
      quote.save(function(err){
        if (err){
          response.json({errors: err});
        }
        else{
          author.save(function(err){
            if (err){
              response.json({errors: err});
            }
            else{
              response.json({success: 'success'});
            }
          })
        }
      })
    })
  },

  voteup: function(request, response){
    Models.Quote.findByIdAndUpdate(request.params.id, {$inc: {votes: 1}},  function(err){
      response.json({errors: err});
    })
  },

  votedown: function(request, response){
    Models.Quote.findByIdAndUpdate(request.params.id, {$inc: {votes: -1}},  function(err){
      response.json({errors: err});
    })
  },

  author_id: function(request, response){
    Models.Author.find({_id: request.params.id}, function(err, author){
      if(err){
        response.json({errors: err});
      }
      else{
        response.json(author);
      }
    })
  },

  create_author: function(request, response){
    var author = new Models.Author(request.body);
    author.save(function(err){
      if(err){
        response.json({errors: err});
      }
      else{
        response.json({message: "Success", author: author});
      }
    })
  },

  update: function(request, response){
    Models.Author.findByIdAndUpdate(request.params.id, {name: request.body.name},  {runValidators: true}, function(err, author){
      if(err){
        response.json({errors: err});
      }
    })
  },

  delete: function(request, response){
    Models.Author.remove({_id: request.params.id}, function(err){
      if(err){
        response.json({errors: err});
      }
      else{
        response.json({message: "Success"});
      }
    })
  },

  delete_quote: function(request, response){

    Models.Quote.remove({_id: request.params.id}, function(err){
      if(err){
        response.json({errors: err});
      }
      else{
        console.log('WHAT');
        response.json({message: "Success"});
      }
    })
  },
}
