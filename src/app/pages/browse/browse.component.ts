import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from '../../shared/video-content.interface';
import { Movie2Component } from '../../shared/components/movie2/movie2.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent,BannerComponent,MovieCarouselComponent,Movie2Component],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent implements OnInit {
  popularMovies:IVideoContent[]=[];
  movieService=inject(MovieService);
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(res=>{
      console.log(res)
    })
  }

}
