import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  username: string;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  logout() {
    localStorage.clear();
    this.userService.getUserDetails = null;
  }
}
