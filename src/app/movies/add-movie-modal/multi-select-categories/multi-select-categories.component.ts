import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Categorie} from '../../categories';

@Component({
  selector: 'app-multi-select-categories',
  templateUrl: './multi-select-categories.component.html',
  styleUrls: ['./multi-select-categories.component.scss']
})
export class MultiSelectCategoriesComponent implements OnInit {
  @Input() options: Categorie[];
  @Output() change = new EventEmitter<any[]>();
  data: any[] = [];
  ngOnInit() {
    this.options.map(category => ({ ...category, checked: false}));
  }
  check(option) {
    option.checked = !option.checked;
    this.data = this.options.filter((x: any) => x.checked).map(x => {
      return {key: x.key, desc: x.desc};
    });
    this.change.emit(this.data);
  }
}
