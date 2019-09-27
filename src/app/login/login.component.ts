import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
/*import {Credentials, CurrentUser, VrSharedState} from '../vr.shared-state';
import { Http} from '@angular/http';
import {Observable} from '../../../node_modules/rxjs/Rx';*/
import {VrHttp} from '../vr.http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private vrHttp: VrHttp/*private http: Http, private model: VrSharedState*/) {
  }
username: string;
password: string;
  login(username, password) {
    // http://localhost:8084/ws/core/login/admin?password=admin
    console.log(username);
    console.log(password);
    this.vrHttp.authenticate(username, password).subscribe(x => {
      if (x == null) {
        alert('Invalid Account Please Try Again');
        alert('noo');
      } else {
        this.router.navigate(['home']);
      }
    });
  }

  /*public login(username: any, password: any) {
    // alert('Why ' + username + ' , ' + password);
    if (username == null || username == '' || password == null || password == '') {
      alert('Invalide Account Please Try Again');
    } else {
      const apiURL = `${this.model.apiRoot}/login?app=ng&login=${username}&password=${password}`;
      // alert('authenticate : ' + apiURL);
      return this.http.get(apiURL).map(res => {
        const jsessionid = res.headers.get('x-jsessionid');
        // alert('found session : ' + jsessionid);
        if (jsessionid == null) {
          return;
        }
        this.model.sessionId.next(jsessionid);
        const item = res.json();
        // alert(JSON.stringify(item))
        let ret: CurrentUser;
        if (item['$1'] != null) {
          this.model.currentUser.next(ret = new CurrentUser(item['$1'].userFullName, '', item['$1'], true));
          this.model.credentials = new Credentials(username, password);
          // alert('received okkay ' + JSON.stringify(item['$1']));
        } else if (item['$error'] != null) {
          this.model.currentUser.next(ret = new CurrentUser('Unknown', '', null, false));
          alert('Invalide Account Please Try Again');
          // alert('received error ' + JSON.stringify(item['$error']));
        } else {
          // alert('received error2 ' + JSON.stringify(item));
          alert('Invalide Account Please Try Again');
          this.model.currentUser.next(ret = new CurrentUser('Unknown', '', null, false));
        }
        this.router.navigate(['home']);
      }).catch(error2 => {
        const item = error2;
        if (item['$error'] != null) {
          return this.throwObj(item['$error']);
        } else {
          return this.throwMsg('UnknownError', 'Unknown error : ' + this._str(error2));
        }
      });
    }
  }

  private _str(a: any): string {
    if (typeof a === 'string') {
      return '' + a;
    }
    let ss = JSON.stringify(a);
    if (ss == '{}') {
      // alert(typeof(a)+'  '+(a.toString != null));
      ss = '' + a;
    }
    return ss;
  }
  private throwObj(a: any): Observable<any> {
    // alert('Error : '+JSON.stringify(a));
    return Observable.throw(a);
  }
  private throwMsg(t: string, m: string): Observable<any> {
    return this.throwObj({type: t, message: m});
  }
*/

  ngOnInit() {
  }

}
