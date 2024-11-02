import { Component, output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../../mocks/users-list';
import { DatePipe } from '@angular/common';
import { StatusPipe } from '../../pipes/status.pipe';
import { DashIfEmptyPipe } from '../../pipes/dash-if-empty.pipe';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [MatTableModule, DatePipe, StatusPipe, DashIfEmptyPipe],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  public readonly usersList: IUser[] = UsersList;
  public readonly displayedColumns: string[] = ['name', 'date', 'status'];

  public readonly userSelectedEmit = output<IUser>({ alias: 'userSelected' });

  onUserSelected(user: IUser) {
    this.userSelectedEmit.emit(user);
  }
}
