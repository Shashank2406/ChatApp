import { CanActivateViaAuthGuard } from './connector.service';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { RouterModule,Routes } from '@angular/router';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { Configuration} from './config'


export const rou: Routes=[
    {path:'' ,component:FormComponent},
    {path:'chatbox',component:ChatboxComponent,canActivate: [CanActivateViaAuthGuard]}

];