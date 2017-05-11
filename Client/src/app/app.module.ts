import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ConnectorService} from './connector.service';
import { CanActivateViaAuthGuard } from './connector.service';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { RouterModule,Routes } from '@angular/router';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ChatService } from './chat.service';


const rou: Routes=[
{path:'' ,component:FormComponent},
{path:'chatbox',component:ChatboxComponent,canActivate: [CanActivateViaAuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ChatboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rou)
  ],
  providers: [ConnectorService,CanActivateViaAuthGuard,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
