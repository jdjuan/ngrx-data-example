import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private postService: PostService) {
    this.posts$ = this.postService.entities$;
    this.isLoading$ = this.postService.loading$;
    this.postService.getAll();
  }
}
