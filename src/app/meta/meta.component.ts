import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-meta-view',
  templateUrl: 'meta.html'
})

export class MetaComponent implements OnInit {
  public data: object[];

    constructor(
        private meta: Meta,
        private title: Title
    ) {
      this.meta.addTag({ name: 'description', content: 'My meta description' });
      this.meta.addTag({ name: 'author', content: 'Author is me' });
      this.meta.addTag({ name: 'keywords', content: 'META keywords here' });
      this.title.setTitle('Динамический заголовок страницы');
    }

  ngOnInit() {}
}
