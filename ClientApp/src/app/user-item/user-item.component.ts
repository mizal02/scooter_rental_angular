import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent {
  @Input() user: User;

  constructor(private userService: UserService) {}

  deactive(userId: string) {
    this.userService.deactive(userId).subscribe((response) => {
      if (response.status == 200) this.user.isActive = !this.user.isActive;
    });
  }
}
