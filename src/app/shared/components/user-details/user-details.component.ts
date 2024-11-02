import { Component, input } from '@angular/core';
import { UserDetailInfoComponent } from './components/user-detail-info/user-detail-info.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { IUser } from '../../interfaces/user/user.interface';
import { PhonePipe } from '../../pipes/phone.pipe';
import { AddressPipe } from '../../pipes/address.pipe';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [UserDetailInfoComponent, MatListModule, MatDividerModule, PhonePipe, AddressPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  public readonly user = input.required<IUser>()
}
