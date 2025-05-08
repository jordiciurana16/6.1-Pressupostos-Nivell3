import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-starship-card',
  imports: [],
  templateUrl: './starship-card.component.html',
  styleUrl: './starship-card.component.scss',
})
export class StarshipCardComponent {
  @Input() starship!: any;
}
