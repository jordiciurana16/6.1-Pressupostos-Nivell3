import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StarshipCardComponent } from '../../../starship-card/starship-card.component';
import { ApiService } from '../../../../service/api.service';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starships-view',
  imports: [CommonModule, StarshipCardComponent],
  templateUrl: './starships-view.component.html',
  styleUrl: './starships-view.component.scss',
})
export class StarshipsViewComponent implements OnInit {
  starshipsList: any[] = [];
  starshipId: string | null = null;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  goToStarshipDetails(id: string) {
    if (id) {
      this.router.navigate(['/starships', id]);
    } else {
      console.error('Invalid starship ID');
    }
  }

  ngOnInit(): void {
    this.starshipId = this.route.snapshot.paramMap.get('id');
    if (this.starshipId) {
      console.log(`Starship ID: ${this.starshipId}`);
    }
    this.apiService.getStarships().subscribe((data: any) => {
      this.starshipsList = data.results;
      console.log(this.starshipsList);
    });
  }

  public extractStarshipId(url: string): string {
    const segments = url.split('/').filter((segment) => segment);
    return segments.pop() || '';
  }

  loadMoreStarships() {
    this.apiService.getNextStarships().subscribe((data: any) => {
      this.apiService.nextPageUrl = data.next; // Actualitza nextPageUrl
      this.starshipsList = [...this.starshipsList, ...data.results]; // Afegeix els nous resultats
      console.log(this.apiService.nextPageUrl);
    });
  }
}
