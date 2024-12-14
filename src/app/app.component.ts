import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly _authService = inject(AuthService);

  scopes() {
    console.log('Scopes ', this._authService.getUserScopes());
  }

  verify() {
    this._authService.verifyToken().subscribe(response => {
      console.log('Response Verify', response);
    });
  }

  login() {
    this._authService.login('user', 'user').subscribe(response => {
      console.log('Response Login', response);
    });
  }

}
