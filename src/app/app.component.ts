import { Component } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
// import { UserService } from './applicant.service';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sc-movement';
  // users: User[]; --> deklariranje na lista od useri
  onShowForm(): void {
    //  otvori dialog so forma
  }
  constructor(
    private location: Location,
    // private userService: UserService
  ) {}
  /*getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  } --> metod za zemanje useri od service
  ngOnInit(): void {
    this.getUsers();
  } --> inicijalizacija pri start*/
}
