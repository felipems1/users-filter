import { Component } from '@angular/core';
import { UserDetailsComponent } from './shared/components/user-details/user-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
