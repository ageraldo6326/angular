import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasestructuralesComponent } from './directivasestructurales.component';

describe('DirectivasestructuralesComponent', () => {
  let component: DirectivasestructuralesComponent;
  let fixture: ComponentFixture<DirectivasestructuralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivasestructuralesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasestructuralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
