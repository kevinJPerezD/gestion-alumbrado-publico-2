import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckviewComponent } from './checkview.component';

describe('CheckviewComponent', () => {
  let component: CheckviewComponent;
  let fixture: ComponentFixture<CheckviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
