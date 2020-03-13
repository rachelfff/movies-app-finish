import { Component, OnInit } from '@angular/core';
import {MoviesService} from './movies.service';
import {Subscription} from 'rxjs';
import {Movie} from './movie';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddMovieModalComponent} from './add-movie-modal/add-movie-modal.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
subscription = new Subscription();
movies: Movie[];
moviesByCategories: Movie[];
categories: object;
exitsCategories = [];
  constructor(private moviesService: MoviesService, private modalService: NgbModal) { }

  ngOnInit() {
      this.subscription.add(
        this.moviesService.getMoviesList().subscribe((movies: Movie[]) => {
            this.movies = movies;
            this.moviesByCategories = movies;
            this.changeCategories('action');
            this.getCategories();
            this.getExitsCategories();
        }));
  }
  getCategories() {
    this.subscription.add(
      this.moviesService.getCategoriesList().subscribe((categories: object) => {
      this.categories = categories;
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
       if (this.exitsCategories.indexOf(category)) {
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
 openAddMovieModal() {
    const moviesName = this.getAllMoviesName();
    const modalRef = this.modalService.open(AddMovieModalComponent , { size: 'lg'});
    modalRef.componentInstance.allCategories = Object.keys(this.categories);
    modalRef.componentInstance.exitsMoviesName = moviesName;
    modalRef.result.then((data) => {
      this.moviesService.addNewMovie().subscribe(() => {
      });
   }, (reason) => {});

 }
}
