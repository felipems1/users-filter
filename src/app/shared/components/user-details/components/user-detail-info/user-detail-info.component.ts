import { Component, input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DashIfEmptyPipe } from '../../../../pipes/dash-if-empty.pipe';

@Component({
  selector: 'app-user-detail-info',
  standalone: true,
  imports: [MatListModule, MatDividerModule, DashIfEmptyPipe],
  templateUrl: './user-detail-info.component.html',
  styleUrl: './user-detail-info.component.scss'
})
export class UserDetailInfoComponent {
  public readonly label = input.required<string>();
  public readonly value = input.required<string>();
}
