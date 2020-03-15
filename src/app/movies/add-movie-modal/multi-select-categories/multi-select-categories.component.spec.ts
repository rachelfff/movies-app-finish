import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectCategoriesComponent } from './multi-select-categories.component';

describe('MultiSelectCategoriesComponent', () => {
  let component: MultiSelectCategoriesComponent;
  let fixture: ComponentFixture<MultiSelectCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
