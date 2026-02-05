import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

// --- VITAL PART: This 'export' keyword makes it visible to other files ---
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
// ------------------------------------------------------------------------

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  public posts$: Observable<Post[]>;

  constructor(private http: HttpClient) {
    this.posts$ = this.http.get<Post[]>(this.apiUrl).pipe(
      shareReplay(1)
    );
  }
}
