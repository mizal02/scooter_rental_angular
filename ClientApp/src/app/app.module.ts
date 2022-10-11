import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RentComponent } from './rent/rent.component';
import { RentalComponent } from './rental/rental.component';
import { UsersComponent } from './users/users.component';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoPageComponent,
    NavbarComponent,
    RentComponent,
    RentalComponent,
    UsersComponent,
    UserItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
