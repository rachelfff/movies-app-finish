import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
@Input() movies: Movie[];
get sortMoviesByDate() {
    return this.movies.sort((a, b) => {
      return <any> new Date(b.created) - <any> new Date(a.created);
    });
  }
  constructor() {
  }

  ngOnInit() {
    }

    openLinkPage(url: string) {
    window.open(url, '_blank');
  }
}
