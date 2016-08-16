import { Routes, RouterModule } from '@angular/router';

import { LoginComponent , AppComponent ,MasterSoal } from './components/index';

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
