import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDirectoriesComponent } from './open-directories.component';

describe('OpenDirectoriesComponent', () => {
  let component: OpenDirectoriesComponent;
  let fixture: ComponentFixture<OpenDirectoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenDirectoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDirectoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
