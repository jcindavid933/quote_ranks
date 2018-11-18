import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newAuthor: any;
  errors: any;

  constructor(private route:ActivatedRoute, private router: Router, private _httpService: HttpService) { }

  ngOnInit() {
    this.newAuthor = {name: ''};
  }

  createAuthor(){
    const obs = this._httpService.createAuthor(this.newAuthor);
    obs.subscribe((data) => {
      if(data['errors']){
        this.errors = data['errors'];
      }
      else{
        this.newAuthor = {name: ''};
        this.router.navigate(['/']);
      }
    })
  }
}
