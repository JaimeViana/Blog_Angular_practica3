import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = [
      new Post('Cerveza PILSNER artesana ATRIO (Sigüenza)', 'Cerveza de color ambar claro de larga maduración en bodega, suave amargor y final seco, muy elegante, sabor a malta limpio y algo tostado proecedente de sus lúpulos nobles.', 'Catador experto', 'https://cromatika.es/wp-content/uploads/2020/06/170620-Vertical_230x360-ATRIO.jpg', '12/08/2020', 'Cervezas artesanas'),
      new Post('Cerveza APA artesana ATRIO (Sigüenza)', 'Cerveza de color amarillo luminoso de alta fermentación con aromas tropicales y cítricos que le aportan los lúpulos americanos.', 'Catador experto', 'https://s3.eu-west-2.amazonaws.com/mentta/producto/pack-cerveza-apa-lista.jpg', '13/08/2020', 'Cervezas artesanas')
    ]
  }

  agregarPost(Post): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      this.arrPosts.push(Post)
      resolve(this.arrPosts)
    });
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPosts)
    });
  }

  getPostsByCategoria(cat): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPosts.filter(post => {
        return post.categoria === cat
      }))
    });
  }
}


