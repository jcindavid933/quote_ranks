import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  newQuote: any;
  oneAuthor: any;

  constructor(private route:ActivatedRoute, private router: Router, private _httpService: HttpService) { }

  ngOnInit() {
    this.newQuote = {quote: '', votes: '0', _author: ''};
    this.oneAuthor = {_id: '', name: ''};
    this.getOneAuthor();
  }

  getOneAuthor(){
    this.route.params.subscribe((params: Params) => {
      const obs = this._httpService.getOneAuthor(params['id']);
      obs.subscribe((data) => {
        this.oneAuthor = data[0];
      })
    })
  }

  CreateQuote(){
    console.log("1")
    const obs = this._httpService.createQuote(this.oneAuthor._id, this.newQuote);
    console.log("2")
    obs.subscribe((data) => {
      console.log("end")
      console.log(data['errors']);
      if(data['errors']){
        this.errors = data['errors'];
      }
      else{
        console.log('hdiawhdiowhaoidhaoiwhdoiaw');
        console.log(this.oneAuthor._id);
        this.router.navigate(['/quotes/'+ this.oneAuthor._id]);
      }
    })
  }

}
