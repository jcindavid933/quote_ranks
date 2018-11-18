import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  allQuotes: any;
  oneAuthor: any;

  constructor(private route:ActivatedRoute, private router: Router, private _httpService: HttpService) { }

  ngOnInit() {
    this.oneAuthor = {_id:'', name: ''};
    this.GetOneAuthor();
    this.GetAllQuotes();
  }

  GetOneAuthor(){
    this.route.params.subscribe((params: Params) => {
      const obs = this._httpService.getOneAuthor(params['id']);
      obs.subscribe((data) => {
        this.oneAuthor = data[0];
      })
    })
  }

  GetAllQuotes(){
    this.route.params.subscribe((params: Params) => {
      const obs = this._httpService.getAllQuotes(params['id']);
      obs.subscribe((data) => {
        console.log(data);
        this.allQuotes = data;
      })
    })
  }

  voteUp(quote){
    const obs = this._httpService.VoteUp(quote);
    obs.subscribe((data) => {
      this.GetAllQuotes();
    })
  }

  voteDown(quote){
    const obs = this._httpService.VoteDown(quote);
    obs.subscribe((data) => {
      this.GetAllQuotes();
    })
  }

  deleteQuote(quote){
    const obs = this._httpService.deleteQuote(quote);
    obs.subscribe((data) => {
      console.log(data);
      this.GetAllQuotes();
    })
  }

}
