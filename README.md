# Netflix Clone Project

A Netflix-inspired Angular application that displays movies and TV shows using The Movie Database (TMDB) API.

## ✨ Features

- 🎬 **Movie Browse**: Browse movies organized in carousels by categories
- 🎥 **Movie Details**: View detailed information about each movie including:
  - YouTube trailer playback
  - Full plot overview
  - Genres and metadata (rating, budget, revenue, language, status)
  - User reviews and ratings
- 👤 **Authentication**: Login system for user access
- 🎨 **Responsive Design**: Tailwind CSS for beautiful UI
- 📱 **Interactive UI**: Smooth navigation and hover effects

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- Angular CLI 18+
- TMDB API Key

### Installation

```bash
# 1. Clone the project
git clone <your-repo-url>
cd Netflix_Clone_Project

# 2. Install dependencies
npm install

# 3. Set up API Key
The app uses your TMDB API token from localStorage.
On first load, the app will use the value from the .env file.
```

### Running the Application

```bash
# Start the development server
npm start

# Navigate to http://localhost:4200/
# The application will automatically reload if you change any source files
```

### Building for Production

```bash
# Build the project
npm run build

# Build artifacts will be stored in the dist/ directory
```

### Running Tests

```bash
# Run unit tests via Karma
npm test
```

## 📁 Project Structure

```
Netflix_Clone_Project/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── login/              # Login page component
│   │   │   ├── browse/             # Browse/home page with carousels
│   │   │   └── movie-detail/       # Movie details page
│   │   │
│   │   ├── core/
│   │   │   └── components/
│   │   │       ├── banner/         # Featured movie banner
│   │   │       └── header/         # Navigation header
│   │   │
│   │   ├── shared/
│   │   │   ├── services/
│   │   │   │   ├── movie.service.ts        # TMDB API calls
│   │   │   │   └── auth.service.ts         # Authentication logic
│   │   │   ├── components/
│   │   │   │   └── movie-carousel/        # Reusable movie carousel
│   │   │   └── pipes/
│   │   │       ├── image.pipe.ts          # Image URL formatting
│   │   │       └── description.pipe.ts    # Text truncation
│   │   │
│   │   ├── app.routes.ts           # Route configuration
│   │   ├── app.config.ts           # App providers
│   │   └── app.component.ts        # Root component
│   │
│   ├── environments/
│   │   └── environment.ts          # API configuration
│   │
│   └── ...
│
├── public/                         # Static assets
├── angular.json                    # Angular CLI configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Project dependencies
└── README.md                       # This file
```

## 🎯 Component Overview

### BrowseComponent
Main page displaying movie carousels by category. Users can:
- Scroll through movies
- Hover to see preview
- Click to view details

### MovieDetailComponent
Shows comprehensive information about a selected movie:
- Embedded YouTube trailer
- Full metadata and descriptions
- User reviews
- Back navigation to browse

### MovieCarouselComponent
Reusable carousel component displaying:
- Movie posters
- Hover effects
- Click navigation to details
- Smooth scrolling

### MovieService
Handles all TMDB API calls:
- `getMovies()` - Fetch movies by category
- `getMovieDetails()` - Get specific movie information
- `getMovieReviews()` - Fetch user reviews
- `getYoutubeTrailer()` - Get trailer video ID

## 🔧 Configuration

### API Configuration
The application uses TMDB API. The API token is loaded from:
1. localStorage (if set during runtime)
2. The .env file (on initial app load)

To use a different API key:
1. Update the `.env` file with your TMDB API token
2. Or set `TMDB_API_TOKEN` in browser localStorage

### Environment Files
- `src/environments/environment.ts` - Development configuration
- The production build uses the same configuration but with `production: true`

## 🌍 URL Routes

```
/                          # Login page
/browse                    # Browse all movies
/movie/:id                 # Movie detail page (id = TMDB movie ID)
```

### Example Movie URLs
```
http://localhost:4200/movie/550      (Fight Club)
http://localhost:4200/movie/27205    (Inception)
http://localhost:4200/movie/278      (The Shawshank Redemption)
```

## 🛠 Technologies Used

- **Framework**: Angular 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Angular HttpClient
- **Routing**: Angular Router
- **API**: The Movie Database (TMDB) API
- **Build Tool**: Webpack (via Angular CLI)
- **Testing**: Karma + Jasmine

## 📝 Available Scripts

```bash
npm start                  # Start development server
npm run build             # Build for production
npm test                  # Run unit tests
ng generate component     # Generate new component
ng help                   # Get Angular CLI help
```

## 🐛 Troubleshooting

### Movies Not Loading?
1. Check that the TMDB API token is set in `.env` file
2. Ensure your API key is valid and has quota remaining
3. Check browser console for API errors
4. Verify internet connection

### Styling Issues?
- Ensure Tailwind CSS is properly compiled
- Run `npm install` if styles seem broken
- Clear browser cache

### Build Errors?
- Run `npm install` to ensure all dependencies are present
- Check that you're using Node.js v18+
- Check TypeScript configuration in tsconfig.json

## 📦 Dependencies

Main dependencies are listed in `package.json`. Key ones include:
- `@angular/*` - Angular framework
- `tailwindcss` - CSS framework
- `typescript` - TypeScript compiler

## 🎓 Learning Resources

- [Angular Documentation](https://angular.dev)
- [TMDB API Documentation](https://www.themoviedb.org/settings/api)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is open source and available under the MIT License.
