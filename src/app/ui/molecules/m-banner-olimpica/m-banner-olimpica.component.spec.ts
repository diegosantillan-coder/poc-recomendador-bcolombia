import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBannerOlimpicaComponent } from './m-banner-olimpica.component';

describe('MBannerOlimpicaComponent', () => {
  let component: MBannerOlimpicaComponent;
  let fixture: ComponentFixture<MBannerOlimpicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MBannerOlimpicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MBannerOlimpicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
