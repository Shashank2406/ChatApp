import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../connector.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name:string;
  email:string;
  constructor(public send:ConnectorService) { }

  ngOnInit() {
  }
   check(form1)
  {
    console.log(form1.value.name);
    console.log(form1.value.email);
    this.send.set(form1.value.name,form1.value.email)
    this.send.PostMongo(form1).subscribe(data => {return true;}

          ,errorr=>{console.log(errorr)}

  );
  }
}
