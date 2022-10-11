import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { RentComponent } from 'src/app/rent/rent.component';
import { first } from 'rxjs';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css'],
})
export class InfoPageComponent implements OnInit {
  userDetails: User;

  constructor(private user: UserService) {}

  ngOnInit() {
    this.user
      .getUserDetails()
      .subscribe((response) => (this.userDetails = response));
    console.log(this.userDetails);
  }
}
