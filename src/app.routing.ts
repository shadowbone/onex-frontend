import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AppComponent} from './components/app/app.component';
import {MasterSoal} from './components/master/soal/MasterSoal';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path : 'home',
    component : AppComponent,
    data: {
      title: 'Heroes List'
    }
  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'master/soal',
    component : MasterSoal
  }
];

export const routing = RouterModule.forRoot(appRoutes);
