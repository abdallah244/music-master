import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-loading.html',
  styleUrls: ['./music-loading.scss']
})
export class MusicLoadingComponent implements OnInit {
  progress = 0;
  currentNote = 0;
  notes = ['♪', '♫', '♬', '🎵', '🎶'];

  ngOnInit() {
    this.animateProgress();
    this.animateNotes();
  }

  private animateProgress() {
    const interval = setInterval(() => {
      this.progress += 2;
      if (this.progress >= 100) {
        clearInterval(interval);
      }
    }, 60);
  }

getLoadingStatus(): string {
  if (this.progress < 30) return 'Initializing...';
  if (this.progress < 60) return 'Loading Artists...';
  if (this.progress < 90) return 'Preparing Content...';
  return 'Almost Ready...';
}

  private animateNotes() {
    setInterval(() => {
      this.currentNote = (this.currentNote + 1) % this.notes.length;
    }, 300);
  }
}
