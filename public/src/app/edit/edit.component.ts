import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editAuthor: any;
  oneAuthor: any;
  errors: any;

  constructor(private route:ActivatedRoute, private router: Router, private _httpService: HttpService) { }

  ngOnInit() {
    this.editAuthor = {_id: '', name: ''};
    this.oneAuthor = {_id: '', name: ''};
    this.showOneAuthor();
  }

  editAuthorfunc(){
    const obs = this._httpService.editAuthor(this.editAuthor);
    console.log(this.editAuthor);
    obs.subscribe((data) => {
      if(data['errors']){
        this.errors = data['errors'];
      }
      else{
        this.showOneAuthor();
        this.router.navigate(['/']);
      }
    })
  }

  showOneAuthor(){
    this.route.params.subscribe((params: Params) => {
      const obs = this._httpService.getOneAuthor(params['id']);
      obs.subscribe((data) => {
        this.oneAuthor = data[0];
        this.editAuthor._id = this.oneAuthor._id;
      })
   });

  }

}
