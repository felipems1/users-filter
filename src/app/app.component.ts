import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { UserDetailsComponent } from './shared/components/user-details/user-details.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import { UsersListComponent } from './shared/components/users-list/users-list.component';
import { IUser } from './shared/interfaces/user/user.interface';
import { UsersList } from './mocks/users-list';
import { IFilterOptions } from './shared/interfaces/filter-options.inteface';
import { filterUsersList } from './shared/utils/filter-users-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserDetailsComponent, FilterComponent, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public readonly userSelected = signal<IUser>({} as IUser);
  public readonly showUserDetails = signal<boolean>(false);
  public readonly usersList = signal<IUser[]>([]);
  public readonly usersListFiltered = signal<IUser[]>([]);

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList.set(UsersList);
      this.usersListFiltered.set(this.usersList());
    }, 1000);
  }

  onUserSelected(user: IUser): void {
    this.userSelected.set(user);
    this.showUserDetails.set(true);
  }

  onFilter(filterOptions: IFilterOptions): void {
    this.usersListFiltered.set(filterUsersList(filterOptions, this.usersList()));
  }  
}
