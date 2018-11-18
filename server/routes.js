var controller = require('./controller');
module.exports = function(app){
  app.get('/authors', controller.authors);
  app.get('/author/:id', controller.author_id);
  app.get('/quotes/:id', controller.quotes);
  app.get('/voteup/:id', controller.voteup);
  app.get('/votedown/:id', controller.votedown);
  app.post('/create_quote/:id', controller.create_quote);
  app.post('/create_author', controller.create_author);
  app.put('/update/:id', controller.update);
  app.delete('/delete/:id', controller.delete);
  app.delete('/delete_quote/:id', controller.delete_quote);
  app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'))
  });
}
