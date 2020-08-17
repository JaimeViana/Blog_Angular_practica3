import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service'
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(
    private postsService: PostsService,
    private router: Router) { }

  ngOnInit(): void {
    this.postsService.getAllPosts()
      .then(arrPosts => {
        this.posts = arrPosts;
      }).catch(error => console.log(error));
  }

  async onChange($event) {
    // console.log($event.target.value);
    if ($event.target.value === 'todas') {
      this.posts = await this.postsService.getAllPosts();
    } else {
      this.posts = await this.postsService.getPostsByCategoria($event.target.value);
    }
  }

  onClick(pRuta) {
    this.router.navigate([pRuta]);
  }
}
