import { FormComponent } from './form/form.component';
import { RouterModule,Routes } from '@angular/router';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { CanActivateViaAuthGuard } from './connector.service';

export class Configuration {

    //URL
    public UrlObj = {
        NodeURL: 'http://192.168.15.27:3000',
        HomeURL: 'http://192.168.15.27:4200'
    };
   
}