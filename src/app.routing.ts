import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './providers/AuthGuard';
import { 
  LoginComponent , 
  AppComponent ,
  HomeComponent,
  MasterSoal,
  UjianComponent
} from './components/index';

const appRoutes: Routes = [
  { path: '',redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component : LoginComponent },
  { path: 'home', component : HomeComponent, canActivate : [AuthGuard], children : [
    { path : '' , component : MasterSoal},
  	{ path : 'master-soal' , component : MasterSoal},
  	{ path : 'soal', component:UjianComponent} 
  ] },
  { path: '**', component: LoginComponent } 
];

export const appRoutingProviders: any[] = [

];
export const routing = RouterModule.forRoot(appRoutes);
