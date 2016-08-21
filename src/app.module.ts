import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, XHRBackend  } from '@angular/http';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { routing , appRoutingProviders } from './app.routing';
import { AuthGuard } from './providers/AuthGuard';
import { LoginService } from './providers/login.service';

import { 
  LoginComponent , 
  AppComponent ,
  HomeComponent ,
  MasterSoal,
  UjianComponent
} from './components/index';

@NgModule({
  imports: [ 
  					BrowserModule , 
  					routing,
  					FormsModule,
            HttpModule,
            ReactiveFormsModule,
            MdCardModule,
            MdButtonModule,
          ],
  declarations: [ 
  					AppComponent,
  					LoginComponent ,
            HomeComponent,
            MasterSoal,
            UjianComponent
          ],
  providers : [
            appRoutingProviders
          ],
  bootstrap:[ 
  					AppComponent
          ]
})
export class AppModule { }