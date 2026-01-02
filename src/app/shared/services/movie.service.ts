import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const getOptions = () => ({
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc',
  },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${environment.tmdbApiToken}`,
  },
});

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  http = inject(HttpClient);
  getMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie',
      getOptions()
    );
  }
  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv', getOptions());
  }

  getRatedMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/top_rated',
      getOptions()
    );
  }

  getBannerImage(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/images`,
      getOptions()
    );
  }

  getBannerVideo(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      getOptions()
    );
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, getOptions());
  }

  getNowPlayingMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/now_playing',
      getOptions()
    );
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', getOptions());
  }

  getTopRated() {
    return this.http.get(
      'https://api.themoviedb.org/3/discover/movie',
      getOptions()
    );
  }

  getUpcomingMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/upcoming',
      getOptions()
    );
  }

  getMovieReviews(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews`,
      getOptions()
    );
  }
}
