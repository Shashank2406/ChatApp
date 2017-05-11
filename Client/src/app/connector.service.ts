import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CanActivate ,Router} from '@angular/router';

import 'rxjs/RX';

@Injectable()
export class ConnectorService {
  users:string;
  pas:string;
  Url:'http://192.168.15.156:3000/api/newuser'
  constructor(public GitHttp : Http,public router1:Router) { }
   set(user,pass)
  {
    this.users=user;
    this.pas=pass;
    this.router1.navigate(['/chatbox']);
  }
  PostMongo(form){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    console.log(form.value);
    return this.GitHttp.post('http://192.168.15.156:3000/api/newuser', form.value, headers).map((res: Response) => res.json());
  }
}

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor() {}
  canActivate() {
    // console.log();
   
      return true;
  }
}