import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajePadreHijoComponent } from './mensaje-padre-hijo.component';

describe('MensajePadreHijoComponent', () => {
  let component: MensajePadreHijoComponent;
  let fixture: ComponentFixture<MensajePadreHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajePadreHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajePadreHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
