import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  template: `
  <div class="container">
    <h1 class="text-center">Página não encontrada :(</h1>
    </div>
  `,
  styles: []
})
export class PaginaNaoEncontradaComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('8Sys :(');
  }

}