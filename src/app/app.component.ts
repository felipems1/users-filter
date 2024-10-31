import { Component } from '@angular/core';
import { UserDetailsComponent } from './shared/components/user-details/user-details.component';
import { FilterComponent } from './shared/components/filter/filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserDetailsComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
