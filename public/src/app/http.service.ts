import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAllAuthors(){
    return this._http.get('/authors');
  }

  getAllQuotes(id){
    return this._http.get('/quotes/' + id)
  }

  VoteUp(quote){
    return this._http.get('/voteup/' + quote._id);
  }

  VoteDown(quote){
    return this._http.get('/votedown/' + quote._id);
  }

  getOneAuthor(id){
    return this._http.get('/author/' + id);
  }

  editAuthor(author){
    return this._http.put('/update/' + author._id, author);
  }

  createAuthor(author){
    return this._http.post('/create_author', author);
  }

  createQuote(id, quote){
    console.log("3")

    return this._http.post('/create_quote/' + id, quote);
  }

  deleteAuthor(author){
    return this._http.delete('/delete/' + author._id);
  }

  deleteQuote(quote){
    return this._http.delete('/delete_quote/' + quote._id);
  }

}
