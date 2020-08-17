import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../models/post.model';


@Component({
  selector: 'app-detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.css']
})
export class DetallePostComponent implements OnInit {

  post: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.post = await this.postsService.getPostsById(params.postId)
    });
  }

  onClick(pRuta) {
    this.router.navigate([pRuta]);
  }

}
