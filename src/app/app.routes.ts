import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'quien-soy', component: QuienSoyComponent },
    {path: 'login', component: LoginComponent,},
    // La ruta comodin debe ir siempre al final
    // { path: '**', component: PageNotFoundComponent },








];

