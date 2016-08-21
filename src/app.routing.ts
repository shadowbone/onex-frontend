import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './providers/AuthGuard';
import { LoginService } from './providers/login.service';
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
  	{ path : 'master-soal' , component : MasterSoal, canActivate : [AuthGuard] },
  	{ path : 'soal', component:UjianComponent , canActivate : [AuthGuard]} 
  ] },
  { path: '**', component: LoginComponent } 
];

export const appRoutingProviders: any[] = [
    LoginService,
    AuthGuard
];
export const routing = RouterModule.forRoot(appRoutes);
