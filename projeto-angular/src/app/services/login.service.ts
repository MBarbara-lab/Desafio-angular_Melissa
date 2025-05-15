import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfos } from '../models/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  http = inject(HttpClient)

  login(username: string, password: string): Observable<UserInfos> {
    return this.http.post<UserInfos>("http://localhost:3001/login", { name: username, password: password})
    .pipe(
      tap(
        (user) => {
          sessionStorage.setItem("username", user.name)
        }
      )
    )
  }
}
