import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  providers: [ApiService, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(private apiService: ApiService) {}
  starships: any[] = [];
  starshipsPage() {
    this.apiService.getStarships().subscribe((data) => {
      console.log('Starships data:', data); // Mostra el resultat per consola
      this.starships = data;
    });
  }
}
