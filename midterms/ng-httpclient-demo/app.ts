import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Httpclient } from './httpclient';
import { User, Post } from './user.model'; // Import Post

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  userList: User[] = [];
  postList: Post[] = [];

  constructor(private http: Httpclient) {}

  ngOnInit(): void {
    this.http.getUsersRemotely().subscribe((data: User[]) => {
      this.userList = data;
    });

    this.http.getPostsRemotely().subscribe((data: Post[]) => {
      this.postList = data.slice(0, 5);
    });
  }
}
