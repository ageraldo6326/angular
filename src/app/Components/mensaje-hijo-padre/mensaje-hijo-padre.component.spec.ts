import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeHijoPadreComponent } from './mensaje-hijo-padre.component';

describe('MensajeHijoPadreComponent', () => {
  let component: MensajeHijoPadreComponent;
  let fixture: ComponentFixture<MensajeHijoPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeHijoPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeHijoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
