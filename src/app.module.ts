import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  }    from '@angular/forms';
import { HttpModule, XHRBackend  }     from '@angular/http';

import { routing }        from './app.routing';

import { LoginComponent , AppComponent ,MasterSoal, } from './components/index';

@NgModule({
  imports: [ 
  					BrowserModule , 
  					routing,
  					FormsModule,
            HttpModule,
            ReactiveFormsModule
          ],
  declarations: [ 
  					AppComponent,
  					LoginComponent ,
            MasterSoal
          ],
  providers : [

          ],
  bootstrap:[ 
  					AppComponent
          ]
})
export class AppModule { }