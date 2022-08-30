import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { User } from '../shared/models/User';

const USER_KEY = 'user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubjact = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;
  constructor( private http: HttpClient, private toastService: ToastrService) {
    this.userObservable = this.userSubjact.asObservable();
  }

login(userLogin:IUserLogin):Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) =>{
          this.setUserToLocalStorage(user);
          this.userSubjact.next(user);
          this.toastService.success('Login successful!');
        },
        error: (err) => {
          this.toastService.error(err.error, 'Login failed!');
        }
      })
    )
  }

  register(userRegister:IUserRegister): Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) =>{
          this.setUserToLocalStorage(user);
          this.userSubjact.next(user);
          this.toastService.success('Registration successful!');
        },
        error: (err) => {
          this.toastService.error(err.error, 'Registration failed!');
        }
      })
    )
  }

  logout() {
    this.userSubjact.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson)
      return JSON.parse(userJson);

    return new User();
  }
}
