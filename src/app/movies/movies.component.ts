import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from './movies.service';
import {Subscription} from 'rxjs';
import {Movie} from './movie';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddMovieModalComponent} from './add-movie-modal/add-movie-modal.component';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  movies: Movie[];
  moviesByCategories: Movie[];
  categories: object;
  exitsCategories = [];
  userName: string;

  constructor(private moviesService: MoviesService, private modalService: NgbModal , private route: ActivatedRoute) {
    this. userName = this.route.snapshot.paramMap.get('userName');
  }

  get sortMoviesByDate() {
    return this.moviesByCategories.sort((a, b) => {
      return <any> new Date(b.created) - <any> new Date(a.created);
    });
  }

  ngOnInit() {
    this.subscription.add(
      this.moviesService.getMoviesList().subscribe((movies: Movie[]) => {
        this.movies = movies;
        this.moviesByCategories = movies;
        this.getCategories();
      }));
  }

  getCategories() {
    this.subscription.add(
      this.moviesService.getCategoriesList().subscribe((categories: object) => {
        this.categories = categories;
        this.getExitsCategories();
      }));
  }

  changeCategories(category: string) {
    this.moviesByCategories = this.movies.filter(movie => {
      return movie.genres.includes(category) ? true : false;
    });
  }

  getExitsCategories() {
    this.movies.forEach((movie) => {
      movie.genres.forEach((category) => {
        if (this.exitsCategories.indexOf(category) < 0) {
          this.exitsCategories.push(category);
        }
      });
    });
  }

  getAllMoviesName(): string[] {
    const moviesNameArray = [];
    this.movies.forEach((movie) => {
      moviesNameArray.push(movie.name);
    });
    return moviesNameArray;
  }

  deleteMovieFromList(movieName: string) {
    this.moviesService.deleteMovie(movieName).subscribe((newMoviesList) => {
      this.movies = newMoviesList;
    });
  }

  addMovieForList(movie: Movie) {
    this.moviesService.addNewMovie(movie).subscribe((newMoviesList) => {
      this.movies = newMoviesList;
    });
  }

  openAddMovieModal() {
    const moviesName = this.getAllMoviesName();
    const modalRef = this.modalService.open(AddMovieModalComponent, {size: 'lg'});
    modalRef.componentInstance.allCategories = Object.keys(this.categories);
    modalRef.componentInstance.exitsMoviesName = moviesName;
    modalRef.result.then((movie: Movie) => {
      this.addMovieForList(movie);
    }, (reason) => {
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
