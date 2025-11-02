import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../../components/navigation/navigation';
import { ArtistsService, Artist } from '../../models/services/artists.service';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent],
  templateUrl: './artists.html',
  styleUrls: ['./artists.scss']
})
export class ArtistsComponent implements OnInit {
  // Data
  artists: Artist[] = [];
  filteredArtists: Artist[] = [];
  selectedArtist: Artist | null = null;

  // UI States
  isModalOpen = false;
  searchTerm: string = '';
  filter: 'all' | 'arabic' | 'international' = 'all';
filterTypes: ('all' | 'arabic' | 'international')[] = ['all', 'arabic', 'international'];
sortOptions: ('name' | 'popularity' | 'newest')[] = ['name', 'popularity', 'newest'];



  sortBy: 'name' | 'popularity' | 'newest' = 'name';
  viewMode: 'grid' | 'list' = 'grid';
  currentPage: number = 1;
  itemsPerPage: number = 12;

  // Favorites
  favoriteIds: number[] = [];

  constructor(private artistsService: ArtistsService) {}

  ngOnInit() {
    this.loadArtists();
    this.loadFavorites();
  }

  private loadArtists() {
    this.artists = this.artistsService.getArtists();
    this.applyFilters();
  }

  // Image error handling
  handleImageError(event: Event, artistId: number) {
    const img = event.target as HTMLImageElement;
    // استخدم gradient كبديل إذا فشل تحميل الصورة
    img.style.display = 'none';
    img.parentElement!.style.background = this.getArtistGradient(artistId);
  }

  handleModalImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    // للمودال نستخدم gradient مختلف
    img.parentElement!.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }

  // Fallback gradient colors
  getArtistGradient(id: number): string {
    const colors = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    ];
    return colors[id % colors.length];
  }

  // باقي الدوال كما هي...
  applyFilters() {
    let result = [...this.artists];

    if (this.filter !== 'all') {
      result = result.filter(artist => artist.type === this.filter);
    }

    if (this.searchTerm) {
      const query = this.searchTerm.toLowerCase();
      result = result.filter(artist =>
        artist.name.toLowerCase().includes(query) ||
        artist.genre.toLowerCase().includes(query)
      );
    }

    switch (this.sortBy) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'popularity':
        result.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.birthDate).getTime() - new Date(a.birthDate).getTime());
        break;
    }

    this.filteredArtists = result;
    this.currentPage = 1;
  }

  filterArtists(type: 'all' | 'arabic' | 'international') {
    this.filter = type;
    this.applyFilters();
  }

  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
    this.applyFilters();
  }

  sortArtists(sortType: 'name' | 'popularity' | 'newest') {
    this.sortBy = sortType;
    this.applyFilters();
  }

  get displayedArtists() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredArtists.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredArtists.length / this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  getPaginationRange(): number[] {
    const range = [];
    const start = Math.max(1, this.currentPage - 1);
    const end = Math.min(this.totalPages, start + 2);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  }

  openArtistModal(artist: Artist) {
    this.selectedArtist = artist;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedArtist = null;
    document.body.style.overflow = 'auto';
  }

  toggleFavorite(artistId: number) {
    const index = this.favoriteIds.indexOf(artistId);
    if (index > -1) {
      this.favoriteIds.splice(index, 1);
    } else {
      this.favoriteIds.push(artistId);
    }
    this.saveFavorites();
  }

  isFavorite(artistId: number): boolean {
    return this.favoriteIds.includes(artistId);
  }

  viewFavorites() {
    this.filter = 'all';
    this.searchTerm = '';
    this.filteredArtists = this.artists.filter(artist =>
      this.favoriteIds.includes(artist.id)
    );
    this.currentPage = 1;
  }

  private loadFavorites() {
    const saved = localStorage.getItem('musicMusterFavorites');
    this.favoriteIds = saved ? JSON.parse(saved) : [];
  }

  private saveFavorites() {
    localStorage.setItem('musicMusterFavorites', JSON.stringify(this.favoriteIds));
  }

  getArtistAge(birthDate: string): number {
    const birth = new Date(birthDate);
    const today = new Date();
    return today.getFullYear() - birth.getFullYear();
  }

  formatBirthDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  playSong(song: string) {
    // محاكاة تشغيل الأغنية
    console.log('Playing:', song);
  }

  getStats() {
    return {
      total: this.artists.length,
      arabic: this.artists.filter(a => a.type === 'arabic').length,
      international: this.artists.filter(a => a.type === 'international').length,
      favorites: this.favoriteIds.length
    };
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.isModalOpen && event.key === 'Escape') {
      this.closeModal();
    }
  }
}
