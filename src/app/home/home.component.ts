import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {VrHttp} from '../vr.http';
import {User} from './home.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

state: boolean;
// list: Array<string> = ['houssem', 'ghofrane', 'sana', 'hadhami'];
/*list: Array<User> ;*/
 u: User[];
  constructor(public router: Router, private vrHttp: VrHttp) {
    this.state = false;
  }
clickme() {

  this.vrHttp.invokeBeanMethod('paasProjectMainPlugin', 'getAllUsers()').subscribe(c => {
    console.log(JSON.stringify(c));
     this.u = c;
  });
    this.state = true;
}
  ngOnInit() {
  }

}
