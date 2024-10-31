import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-detail-info',
  standalone: true,
  imports: [],
  templateUrl: './user-detail-info.component.html',
  styleUrl: './user-detail-info.component.scss'
})
export class UserDetailInfoComponent {
  public readonly label = input.required<string>();
  public readonly value = input.required<string>();
}
