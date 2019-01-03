import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  getUser(): Observable<User[]> {
    return of(USERS);
  }
  constructor() { }
}
