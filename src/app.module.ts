import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, XHRBackend  }     from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

import { routing }        from './app.routing';

import { AppComponent }  from './components/app/app.component';
import { LoginComponent }  from './components/login/login.component';

@NgModule({
  imports: [ 
  					BrowserModule , 
  					routing,
  					FormsModule,
            HttpModule
          ],
  declarations: [ 
  					AppComponent,
  					LoginComponent 
          ],
  providers : [

          ],
  bootstrap:[ 
  					AppComponent
          ]
})
export class AppModule { }