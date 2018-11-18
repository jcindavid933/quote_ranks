import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allAuthors: any;

  constructor(private route:ActivatedRoute, private router: Router, private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(){
    const obs = this._httpService.getAllAuthors();
    obs.subscribe((data) => {
      console.log(data);
      this.allAuthors = data;
    })
  }

  deleteAuthor(author){
    const obs = this._httpService.deleteAuthor(author);
    obs.subscribe((data) => {
      console.log(data);
      this.getAuthors();
    })
  }

}
