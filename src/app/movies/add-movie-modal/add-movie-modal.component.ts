import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {Categories} from '../categories';


@Component({
  selector: 'app-add-movie-modal',
  templateUrl: './add-movie-modal.component.html',
  styleUrls: ['./add-movie-modal.component.scss']
})
export class AddMovieModalComponent implements OnInit {
  @Input() allCategories = [];
  @Input() exitsMoviesName: string[];
  @Input() categories: Categories[];
   categoriesValue: string[] = [];
  form: FormGroup;
  exitsName = false;

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal, private http: HttpClient) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30), Validators.pattern('^[a-zA-Z \-\']+')]],
      imdbLink: ['', [Validators.required, Validators.pattern(/http:\/\/(?:.*\.|.*)imdb.com\/(?:t|T)itle(?:\?|\/)(..\d+)/i)]],
      jpgLink: ['', [Validators.required , Validators.pattern(/http(|s):\/\/(?:.*\.|.*)m.media-amazon.com\/images*/i)]],
      description: ['', Validators.required],
      rate: ['', Validators.required],
      length: ['', Validators.required]
    });
    this.form.get('name').valueChanges.subscribe(movieName => {
      this.exitsName = this.exitsMoviesName.indexOf(movieName) > 0 ? true : false;
    });
  }

  checkValidForm() {
    if (this.form.valid && !this.exitsName && this.categoriesValue.length) {
      const sendDate = this.form.value;
      sendDate['created'] = new Date().toDateString();
      sendDate['genres'] = this.categoriesValue;
      console.log(new Date().toDateString());
      this.activeModal.close(sendDate);
    }
  }
  checkValid(data) {
    this.categoriesValue = data.map((categorie) => {
      return categorie.desc;
    });
  }
}
