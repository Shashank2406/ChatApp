import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../connector.service';
import { PassService } from '../pass.service';
declare var $:any;


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name:string;
  email:string;
  num:number;
  constructor(public send:ConnectorService,public setter:PassService) { }

  ngOnInit() {
    $(document).ready(function()
    {
      $('#load-more-content').click(function()
      {
    
        $('#more-content').toggleClass('shown');

        $('#load-more-content').hide();

        if( $('#more-content').hasClass('shown') )
        {
          $('#load-more-content').text('Go Back');
          $('#more-content').fadeIn('slow', function()
          {
            $('#load-more-content').fadeIn('slow');
          });
        }
        else
        {
          $('#load-more-content').text('Click Here to Proceed');
          $('#more-content').fadeOut('slow', function()
          {
            $('#load-more-content').fadeIn('slow');
          });
        }
    });
  });
}
   
check(form1)
  {
    console.log(form1.value.name);
    console.log(form1.value.email);
    console.log(form1.value.number);
    this.send.set(form1.value.name,form1.value.email,form1.value.number)
    this.setter.set(form1.value.name)
    {
      console.log("Value sent");  
    }
  }
  

}
