import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Load TMDB API token from environment or localStorage
const existingToken = localStorage.getItem('TMDB_API_TOKEN');
if (!existingToken) {
  // Try to get from window.__env__ (set by build process) or use fallback
  const envToken = (window as any).__env__?.TMDB_API_TOKEN;
  if (envToken) {
    localStorage.setItem('TMDB_API_TOKEN', envToken);
  } else {
    // Fallback token for development - replace with your own token
    const fallbackToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGZlYTI3ZjE1YThhMGEzNDgxMTllNDY4NTQ0MTc3OCIsIm5iZiI6MTczMDIwNzg5NS41NTEsInN1YiI6IjY3MjBlMDk3MjY4NWNiNjU2M2MxODc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AeAO2U8ZBqYk9IsiNxTOl-Bn2PqAjcbJ8wOU4bVHNZs';
    localStorage.setItem('TMDB_API_TOKEN', fallbackToken);
  }
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
