import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarderiaPerritosComponent } from './guarderia-perritos.component';

describe('GuarderiaPerritosComponent', () => {
  let component: GuarderiaPerritosComponent;
  let fixture: ComponentFixture<GuarderiaPerritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuarderiaPerritosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuarderiaPerritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
