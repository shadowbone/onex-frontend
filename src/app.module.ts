import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, XHRBackend  } from '@angular/http';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { routing } from './app.routing';
import { ENV } from './providers/GlobalService';
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
            LoginService,
            AuthGuard,
            { provide : 'global' , useValue : ENV},
          ],
  bootstrap:[ 
  					AppComponent
          ]
})
export class AppModule { }