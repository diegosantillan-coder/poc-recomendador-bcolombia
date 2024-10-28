import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOlimpicaComponent } from './home-olimpica.component';

describe('HomeOlimpicaComponent', () => {
  let component: HomeOlimpicaComponent;
  let fixture: ComponentFixture<HomeOlimpicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeOlimpicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOlimpicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
