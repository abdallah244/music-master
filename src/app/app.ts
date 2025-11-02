import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../app/models/services/loading.service';
import { MusicLoadingComponent } from './components/music-loading/music-loading';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MusicLoadingComponent],
  template: `
    <app-music-loading *ngIf="loading$ | async"></app-music-loading>
    <router-outlet *ngIf="!(loading$ | async)"></router-outlet>
  `
})
export class App implements OnInit {
  constructor(private loadingService: LoadingService) {}

  get loading$() {
    return this.loadingService.loading$;
  }

  ngOnInit() {
    this.loadingService.simulateLoading(3000);
  }
}
