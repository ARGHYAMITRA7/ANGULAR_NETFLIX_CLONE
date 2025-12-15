import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navList=['Home','TV Shows','News & Popular','My List','Browse by Language']
  searchQuery: string = '';
  showSearch: boolean = false;

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchQuery = '';
    }
  }

  onSearch(event: any) {
    // Handle search logic here
    console.log('Searching for:', this.searchQuery);
  }
}
