import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmoviesComponent } from './tmovies.component';

describe('TmoviesComponent', () => {
  let component: TmoviesComponent;
  let fixture: ComponentFixture<TmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
