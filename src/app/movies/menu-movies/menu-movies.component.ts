import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu-movies',
  templateUrl: './menu-movies.component.html',
  styleUrls: ['./menu-movies.component.scss']
})
export class MenuMoviesComponent implements OnInit {
  @Input() exitsCategories: string[];
  @Output() openAddMovieModal = new EventEmitter();
  @Output() getMoviesCategorie = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  getCategorieMovies(categorie: string) {
    this.getMoviesCategorie.emit(categorie);
  }
}
