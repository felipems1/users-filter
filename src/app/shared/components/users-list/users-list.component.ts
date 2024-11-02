import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../../mocks/users-list';
import { DatePipe } from '@angular/common';
import { StatusPipe } from '../../pipes/status.pipe';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [MatTableModule, DatePipe, StatusPipe],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  public readonly usersList: IUser[] = UsersList;
  public readonly displayedColumns: string[] = ['name', 'date', 'status'];

  onUserSelected(user: IUser) {
    console.log(user)
  }
}
