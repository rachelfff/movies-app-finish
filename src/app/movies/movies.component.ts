import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from './movies.service';
import {Subscription} from 'rxjs';
import {Movie} from './movie';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddMovieModalComponent} from './add-movie-modal/add-movie-modal.component';
import {ActivatedRoute} from '@angular/router';
import {Categories} from './categories';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  movies: Movie[];
  moviesByCategories: Movie[];
  categories: Categories[];
  exitsCategories = [];
  userName: string;
  lastCategory: string;

  constructor(private moviesService: MoviesService, private modalService: NgbModal, private route: ActivatedRoute) {
    this.userName = this.route.snapshot.paramMap.get('userName');
  }

  /**
   * get movieList filter by date
   */
  get sortMoviesByDate() {
    return this.moviesByCategories.sort((a, b) => {
      return <any> new Date(b.created) - <any> new Date(a.created);
    });
  }

  ngOnInit() {
    this.subscription.add(
      this.moviesService.getMoviesList().subscribe((movies: Movie[]) => {
        this.movies = movies;
        this.getCategories();
        this.changeCategories(this.movies[0].genres[0]);
      }));
  }

  /**
   * get all categories
   */
  getCategories() {
    this.subscription.add(
      this.moviesService.getCategoriesList().subscribe((categories: Categories []) => {
        this.categories = categories;
        this.getExitsCategories();
      }));
  }

  /**
   * when user is change category in categories
   */
  changeCategories(category: string) {
    this.lastCategory = category;
    this.moviesByCategories = this.movies.filter(movie => {
      return movie.genres.includes(category) ? true : false;
    });
  }

  /**
   * get exits categories in movie list
   */
  getExitsCategories() {
    this.exitsCategories = [];
    this.movies.forEach((movie) => {
      movie.genres.forEach((category) => {
        if (this.exitsCategories.indexOf(category) < 0) {
          this.exitsCategories.push(category);
        }
      });
    });
  }

  /**
   * for add movie-modal get all name of movies for validation
   */
  getAllMoviesName(): string[] {
    const moviesNameArray = [];
    this.movies.forEach((movie) => {
      moviesNameArray.push(movie.name);
    });
    return moviesNameArray;
  }

  /**
   * delete movie from list
   */
  deleteMovieFromList(movie: Movie) {
    this.moviesService.deleteMovie(movie.name).subscribe((newMoviesList) => {
      this.movies = newMoviesList;
      this.getExitsCategories();
      const isCategory = this.exitsCategories.indexOf(this.lastCategory);
      if (isCategory >= 0) {
        this.changeCategories(this.lastCategory);
      } else {
        this.changeCategories(this.movies[1].genres[1]);
      }
    });
  }

  /**
   * add movie for list
   */
  addMovieForList(movie: Movie) {
    this.moviesService.addNewMovie(movie).subscribe((newMoviesList) => {
      this.movies = newMoviesList;
      this.getExitsCategories();
      this.changeCategories(this.lastCategory);
    });
  }

  /**
   * open addMovie modal
   */
  openAddMovieModal() {
    const moviesName = this.getAllMoviesName();
    const modalRef = this.modalService.open(AddMovieModalComponent, {size: 'lg'});
    modalRef.componentInstance.allCategories = Object.keys(this.categories);
    modalRef.componentInstance.exitsMoviesName = moviesName;
    modalRef.componentInstance.categories = this.categories;
    modalRef.result.then((movie: Movie) => {
      this.addMovieForList(movie);
    }, (reason) => {
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
