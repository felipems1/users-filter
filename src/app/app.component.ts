import { Component, signal } from '@angular/core';
import { UserDetailsComponent } from './shared/components/user-details/user-details.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import { UsersListComponent } from './shared/components/users-list/users-list.component';
import { IUser } from './shared/interfaces/user/user.interface';
import { UsersList } from './mocks/users-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserDetailsComponent, FilterComponent, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public readonly userSelected = signal<IUser>(UsersList[1]);
}
