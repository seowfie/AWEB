import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Post } from '../dataservice';
import { FilterPostsPipe } from '../pipes/filter-pipe';
import { TruncatePipe } from '../pipes/truncate-pipe';
import { catchError, of, Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPostsPipe, TruncatePipe],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class ServicesComponent {
  searchTerm: string = '';
  errorMessage: string = '';

  // 1. Declare the property type here (but don't assign it yet)
  posts$: Observable<Post[]>;

  constructor(public dataService: DataService) {
    // 2. Assign the value INSIDE the constructor
    // Now 'this.dataService' is ready to use!
    this.posts$ = this.dataService.posts$.pipe(
      catchError(error => {
        this.errorMessage = '⚠️ Oh no! Could not load the magic records. Please try again later.';
        console.error('Error loading posts:', error);
        return of([]);
      })
    );
  }
}
