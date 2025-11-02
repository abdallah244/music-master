import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../../components/navigation/navigation';
import { ArtistsService, Artist } from '../../models/services/artists.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  progress = 0;
  isScrolled = false;
  currentFeature = 0;
  visibleSections = new Set();
  private scrollTimeout: any;
  private featureInterval: any;


  features = [
    {
      icon: '🎵',
      title: 'Top 24 Artists',
      description: 'Discover the most influential Arabic and international artists',
      color: '#667eea'
    },
    {
      icon: '📖',
      title: 'Life Stories',
      description: 'Detailed biographies from birth to present day',
      color: '#764ba2'
    },
    {
      icon: '🔥',
      title: 'Hit Songs',
      description: 'Top  songs from each artist with streaming links',
      color: '#f093fb'
    },
    {
      icon: '⚡',
      title: 'Fast & Smooth',
      description: 'Built with Angular 20+ for optimal performance',
      color: '#4facfe'
    }
  ];


  stats = [
    { number: '20+', label: 'Artists', icon: '👑' },
    { number: '100+', label: 'Songs', icon: '🎶' },
    { number: '24/7', label: 'Music', icon: '⏰' },
    { number: '100%', label: 'Quality', icon: '⭐' }
  ];


  testimonials = [
    {
      text: 'Amazing platform to discover new artists and their stories!',
      author: 'Sarah M.',
      role: 'Music Lover',
      avatar: '👩‍💼'
    },
    {
      text: 'The design is stunning and the user experience is flawless.',
      author: 'Alex K.',
      role: 'UI Designer',
      avatar: '👨‍💻'
    },
    {
      text: 'Finally a music app that focuses on artist stories and backgrounds.',
      author: 'Mike R.',
      role: 'Music Producer',
      avatar: '👨‍🎤'
    }
  ];


  featuredArtists: Artist[] = [];

  constructor(private artistsService: ArtistsService) {}

  ngOnInit() {
    this.animateProgress();
    this.startFeatureCarousel();
    this.setupScrollListener();
    this.setupIntersectionObserver();
    this.loadFeaturedArtists();
  }

  ngOnDestroy() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    if (this.featureInterval) {
      clearInterval(this.featureInterval);
    }
  }

  private loadFeaturedArtists() {
    this.featuredArtists = this.artistsService.getFeaturedArtists(6);
  }

  private animateProgress() {
    const interval = setInterval(() => {
      this.progress += 1;
      if (this.progress >= 100) {
        clearInterval(interval);
      }
    }, 40);
  }

  private startFeatureCarousel() {
    this.featureInterval = setInterval(() => {
      this.currentFeature = (this.currentFeature + 1) % this.features.length;
    }, 4000);
  }

  private setupScrollListener() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  @HostListener('window:scroll')
  handleScroll() {
    this.isScrolled = window.scrollY > 100;

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.checkVisibleSections();
    }, 100);
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.visibleSections.add(entry.target.id);
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }

  getFeatureItems(index: number): string[] {
  const items = [
    ['22+ Artists', 'Detailed Profiles', 'Life Stories'],
    ['Birth to Present', 'Career Timeline', 'Personal Journey'],
    ['Top 10 Songs', 'Streaming Links', 'Album Information'],
    ['Angular 20+', 'Fast Loading', 'Smooth Animations']
  ];
  return items[index] || items[0];
}


  private checkVisibleSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0;

      if (isVisible) {
        this.visibleSections.add(section.id);
      }
    });
  }

  setFeature(index: number) {
    this.currentFeature = index;
    clearInterval(this.featureInterval);
    this.startFeatureCarousel();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  getProgressColor(): string {
    if (this.progress < 33) return '#ef4444';
    if (this.progress < 66) return '#f59e0b';
    return '#10b981';
  }

  isSectionVisible(sectionId: string): boolean {
    return this.visibleSections.has(sectionId);
  }


  onExploreArtists() {
    this.scrollToSection('artists-preview');
  }

  onGetStarted() {
    this.scrollToSection('features');
  }



}
