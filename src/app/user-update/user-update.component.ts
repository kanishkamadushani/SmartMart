import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  users = ['Admin', 'Cashier' ,'Sales Assistant'];
  constructor() { }

  ngOnInit() {
  }

}
