import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginService = inject(LoginService)
  router = inject(Router)

  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })

  onSubmitLogin() {
      const { username, password } = this.loginForm.value

    if (!this.loginForm.valid || !username || !password) {
      alert("Existem campos não preenchidos")
      return
    }

    this.loginService.login(username, password).subscribe({
      error: (e) => {
        if (e.status === 401) {
          alert("Usuário ou senha incorretos!")
          return
        }

        alert ("Erro interno! Tente novamente mais tarde.")
      },
      next: () => {
        this.router.navigate(["/home"])
      }
    })
  }
}
