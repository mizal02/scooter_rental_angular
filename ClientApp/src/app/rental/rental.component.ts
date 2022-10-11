import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  title: string = 'Wypożycz hulajnogę';

  userDetails: User;

  constructor(private user: UserService) {}

  isCompletedFunction(): boolean {
    return this.userDetails.rentals.some((x) => x.isCompleted === false);
  }

  rent() {
    if (!this.isCompletedFunction()) {
      this.user
        .startRent()
        .subscribe((response) => (this.userDetails = response));
      console.log(this.userDetails);
    } else {
      this.user
        .stopRent()
        .subscribe((response) => (this.userDetails = response));
      console.log(this.userDetails);
    }
  }
  ngOnInit(): void {
    this.user
      .getUserDetails()
      .subscribe((response) => (this.userDetails = response));
    console.log(this.userDetails);
  }
}
