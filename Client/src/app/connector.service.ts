import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CanActivate ,Router} from '@angular/router';

import 'rxjs/RX';

@Injectable()
export class ConnectorService {
  static name1:string;
  static email:string;
  static num:number;
  constructor(public GitHttp : Http,public router1:Router) { }
  set(name_set,email_set,number_set)
  {
    ConnectorService.name1=name_set;
    ConnectorService.email=email_set;
    ConnectorService.num=number_set;
    this.router1.navigate(['/chatbox']);
  }
}

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor() {}
  canActivate() { 
    if(ConnectorService.name1&&ConnectorService.email&&ConnectorService.num)
    {
      console.log("true");
      return true;
    }
    else
    {
      console.log("false"+ConnectorService.name1+ConnectorService.email+ConnectorService.num);
      
      return false;
    }  
  }
}