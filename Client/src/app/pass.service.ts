import { Injectable } from '@angular/core';

@Injectable()
export class PassService {
  user;
  constructor() { }
  set(name)
  {
    if(name==this.user)
    {
      console.log(name+"Check")
    }
    else
    {
      console.log(name+"check")
      this.user=name;
    }

  }
  get()
  {
    return this.user;
  }

}
