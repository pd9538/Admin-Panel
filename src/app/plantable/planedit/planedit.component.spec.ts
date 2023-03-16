import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneditComponent } from './planedit.component';

describe('PlaneditComponent', () => {
  let component: PlaneditComponent;
  let fixture: ComponentFixture<PlaneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
