import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);

  onLogin() {
    this._authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe({
      next: (_) => {
        this._router.navigate(['dashboard']);
      },
      error: (error) => {
        const UNAUTHORIZED_CREDENTIALS_ERROR = 401;

        if (error.status === UNAUTHORIZED_CREDENTIALS_ERROR) {
          this.loginForm.setErrors({ invalidCredentials: true });
        } else {
          this.loginForm.setErrors({ generalCredentialsError: true });
        }
      },
    });
  }
}
