import { Component, inject, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 1, created_at: new Date(), updated_at: new Date() },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', status: 1, created_at: new Date(), updated_at: new Date() },
    { id: 3, name: 'John Doe', email: 'john@example.com', status: 1, created_at: new Date(), updated_at: new Date() },
    { id: 4, name: 'Jane Doe', email: 'jane@example.com', status: 1, created_at: new Date(), updated_at: new Date() }
  ];

	model: NgbDateStruct | undefined;
	date: { year: number; month: number; } | undefined;

  totalUsers = 100; 
  page = 1;
  pageSize = 10;

  constructor() {}

  ngOnInit() {}
}
