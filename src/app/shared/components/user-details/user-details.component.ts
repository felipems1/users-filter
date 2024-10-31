import { Component } from '@angular/core';
import { UserDetailInfoComponent } from './components/user-detail-info/user-detail-info.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [UserDetailInfoComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

}
