import { Component, OnInit, inject, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../shared/services/movie.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../core/components/header/header.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ImagePipe } from '../../shared/pipes/image.pipe';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ImagePipe],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit {
  private readonly movieService = inject(MovieService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly sanitizer = inject(DomSanitizer);
  @ViewChild('trailerSection') trailerSection!: ElementRef;

  movieId!: number;
  movieDetails: any;
  videos: any[] = [];
  reviews: any[] = [];
  trailerUrl: SafeResourceUrl | null = null;
  loading = true;
  error: string | null = null;

  ngOnInit(): void {
    // Scroll to top of page
    window.scrollTo(0, 0);
    
    this.route.params.subscribe((params) => {
      this.movieId = +params['id'];
      if (this.movieId) {
        this.loadMovieDetails();
      }
    });
  }

  loadMovieDetails(): void {
    this.loading = true;
    this.error = null;

    // Get movie details
    this.movieService.getBannerDetail(this.movieId).subscribe({
      next: (detail) => {
        this.movieDetails = detail;
      },
      error: (err) => {
        console.error('Error loading movie details:', err);
        this.error = 'Failed to load movie details';
      },
    });

    // Get videos/trailers
    this.movieService.getBannerVideo(this.movieId).subscribe({
      next: (videoData: any) => {
        this.videos = videoData.results || [];
        const trailer = this.videos.find(
          (v: any) => v.type === 'Trailer' && v.site === 'YouTube'
        );
        if (trailer) {
          const youtubeUrl = `https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=1`;
          this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            youtubeUrl
          );
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading videos:', err);
        this.loading = false;
      },
    });

    // Get reviews
    this.movieService.getMovieReviews(this.movieId).subscribe({
      next: (reviewData: any) => {
        this.reviews = reviewData.results || [];
      },
      error: (err) => {
        console.error('Error loading reviews:', err);
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/browse']);
  }

  getRatingColor(rating: number): string {
    if (rating >= 8) return 'text-green-500';
    if (rating >= 6) return 'text-yellow-500';
    return 'text-red-500';
  }

  playMovie(): void {
    alert('Movie player coming soon! Play full movie feature will be available shortly.');
  }
}
