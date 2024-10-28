import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCarouselOlimpicaComponent } from './o-carousel-olimpica.component';

describe('OCarouselOlimpicaComponent', () => {
  let component: OCarouselOlimpicaComponent;
  let fixture: ComponentFixture<OCarouselOlimpicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OCarouselOlimpicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OCarouselOlimpicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
