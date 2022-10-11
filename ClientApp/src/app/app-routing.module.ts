import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RentalComponent } from './rental/rental.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'info-page', component: InfoPageComponent },
  { path: 'rental', component: RentalComponent },
  {path: 'users', component: UsersComponent},
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
