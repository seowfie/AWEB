import { Pipe, PipeTransform } from '@angular/core';

// FIX: Ensure this path matches your actual folder name exactly
import { Post } from '../dataservice';

@Pipe({ name: 'filterPosts' })
export class FilterPostsPipe implements PipeTransform {
  transform(posts: Post[] | null, searchText: string): Post[] {
    if (!posts) return [];
    if (!searchText) return posts;

    searchText = searchText.toLowerCase();

    return posts.filter(post =>
      post.title.toLowerCase().includes(searchText) ||
      post.body.toLowerCase().includes(searchText)
    );
  }
}
