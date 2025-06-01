import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeBotonComponent } from './mensaje-boton.component';

describe('MensajeBotonComponent', () => {
  let component: MensajeBotonComponent;
  let fixture: ComponentFixture<MensajeBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeBotonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
