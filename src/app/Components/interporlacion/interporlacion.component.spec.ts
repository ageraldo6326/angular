import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterporlacionComponent } from './interporlacion.component';

describe('InterporlacionComponent', () => {
  let component: InterporlacionComponent;
  let fixture: ComponentFixture<InterporlacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterporlacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterporlacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
