import { Component, input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-user-detail-info',
  standalone: true,
  imports: [MatListModule, MatDividerModule],
  templateUrl: './user-detail-info.component.html',
  styleUrl: './user-detail-info.component.scss'
})
export class UserDetailInfoComponent {
  public readonly label = input.required<string>();
  public readonly value = input.required<string>();
}
