import { Component, Input, OnInit } from '@angular/core';
import { Rental } from '../model/rental';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  @Input() rental: Rental;
  constructor() { }

  ngOnInit(): void {
  }

}
