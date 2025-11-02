import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { LoadingService } from '../../models/services/loading.service';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  progress = 0;
  currentBeat = 0;
  isScrolled = false;
  activeRoute = '';
  private routerSubscription!: Subscription;
  private progressInterval: any;

  // Navigation items with icons
  navItems = [
    { path: '/', label: 'Home', icon: '🏠', active: true },
    { path: '/artists', label: 'Top Artists', icon: '👑', active: false },
    { label: 'About', anchor: 'about', icon: 'ℹ️', active: false },
    { label: 'Features', anchor: 'features', icon: '⭐', active: false }
  ];

  // Ad content
  adContent = {
    title: 'Premium Experience',
    description: 'Unlock exclusive features',
    buttonText: 'Upgrade Now',
    discount: '50% OFF'
  };

  constructor(
    private router: Router,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.startProgressAnimation();
    this.startBeatAnimation();
    this.setupRouterListener();
    this.setupScrollListener();
  }

  ngOnDestroy() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private startProgressAnimation() {
    this.progressInterval = setInterval(() => {
      this.progress = (this.progress + 0.5) % 100;
    }, 50);
  }

  private startBeatAnimation() {
    setInterval(() => {
      this.currentBeat = (this.currentBeat + 1) % 4;
    }, 500);
  }

  private setupRouterListener() {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.activeRoute = event.url;
        this.updateActiveNavItems();
      });
  }

  private setupScrollListener() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  @HostListener('window:scroll')
  handleScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  navigateWithLoading(route: string): void {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
    this.loadingService.show();

    setTimeout(() => {
      this.router.navigate([route]);
      this.loadingService.hide();
    }, 800);
  }

  scrollToSection(sectionId: string): void {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';

    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.smoothScrollToSection(sectionId);
        }, 100);
      });
    } else {
      this.smoothScrollToSection(sectionId);
    }
  }

  private smoothScrollToSection(sectionId: string) {
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

  private updateActiveNavItems() {
    this.navItems.forEach(item => {
      if ('path' in item) {
        item.active = this.activeRoute === item.path;
      } else {
        item.active = false;
      }
    });
  }

  getProgressColor(): string {
    if (this.progress < 33) return '#ef4444';
    if (this.progress < 66) return '#f59e0b';
    return '#10b981';
  }

  getBeatClass(index: number): string {
    return this.currentBeat === index ? 'beat-active' : '';
  }

  onUpgradeClick(): void {
    this.showNotification('Premium features coming soon! 🎵');
  }

  private showNotification(message: string): void {
    // Implementation for showing notifications
    console.log(message);
  }
}
