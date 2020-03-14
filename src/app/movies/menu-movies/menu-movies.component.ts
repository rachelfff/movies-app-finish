import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-menu-movies',
  templateUrl: './menu-movies.component.html',
  styleUrls: ['./menu-movies.component.scss']
})
export class MenuMoviesComponent {
  @Input() userName: string;
  @Input() exitsCategories: string[];
  @Output() openAddMovieModal = new EventEmitter();
  @Output() getMoviesCategorie = new EventEmitter();
  constructor() { }

  getCategorieMovies(categorie: string) {
    this.getMoviesCategorie.emit(categorie);
  }
}
