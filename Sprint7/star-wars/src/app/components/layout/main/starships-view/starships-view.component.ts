import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StarshipCardComponent } from '../../../starship-card/starship-card.component';
import { ApiService } from '../../../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starships-view',
  imports: [CommonModule, StarshipCardComponent],
  templateUrl: './starships-view.component.html',
  styleUrl: './starships-view.component.scss',
})
export class StarshipsViewComponent implements OnInit {
  starshipsList: any[] = [];
  constructor(private apiService: ApiService, private router: Router) {}
  goToStarshipDetails(id: number) {
    this.router.navigate(['starship', id]);
  }

  ngOnInit(): void {
    this.apiService.getStarships().subscribe((data: any) => {
      this.starshipsList = data.results;
    });
  }
}
