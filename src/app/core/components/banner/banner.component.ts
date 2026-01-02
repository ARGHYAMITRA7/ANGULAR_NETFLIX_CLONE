import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnChanges{

  @Input({required: true}) bannerTitle = "";
  @Input({required: true}) bannerOverview = "";
  @Input() key = "Ma1x7ikpid8";
  @Input() movieId: number = 0;
  
  private readonly sanitizer = inject(DomSanitizer);
  private readonly router = inject(Router);
  
  videoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl( `https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1`);

    ngOnChanges(changes: SimpleChanges): void {
    if(changes['key'] && this.key){
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl( `https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1`);
    }
  }

  onPlayClick(): void {
    if (this.movieId) {
      this.router.navigate(['/movie', this.movieId]);
    }
  }

  onMoreInfoClick(): void {
    this.onPlayClick();
  }
}
