import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading$: Observable<boolean>;
  errors$: Observable<any>;
  posts$: Observable<any>;

  constructor(private postService: PostService) {
    this.isLoading$ = this.postService.loading$;
    this.errors$ = this.postService.errors$;
    this.posts$ = this.postService.getAll();
  }
}
