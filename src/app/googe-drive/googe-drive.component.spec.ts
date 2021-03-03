import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogeDriveComponent } from './googe-drive.component';

describe('GoogeDriveComponent', () => {
  let component: GoogeDriveComponent;
  let fixture: ComponentFixture<GoogeDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogeDriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogeDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
