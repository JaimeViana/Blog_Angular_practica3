import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private postsService: PostsService,
    private router: Router) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      texto: new FormControl('', [Validators.required]),
      autor: new FormControl('', [Validators.required]),
      imagen: new FormControl(''),
      fecha: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  async onSubmit(pRuta) {
    // console.log(this.formulario.value);
    const listaPosts = await this.postsService.agregarPost(this.formulario.value);
    console.log(listaPosts);
    this.router.navigate([pRuta]);
    localStorage.setItem('posts', JSON.stringify(this.formulario.value));
  }


}
