import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../movie';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent {
  @Input() movie: Movie;
  @Output() deleteMoviesFromList = new EventEmitter();
  constructor() { }
  //openlink in new tab
  openLinkPage(url: string) {
    window.open(url, '_blank');
  }
  deleteMovie(movie: Movie) {
    this.deleteMoviesFromList.emit(movie.name);
  }
}
