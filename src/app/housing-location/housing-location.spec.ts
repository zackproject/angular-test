import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HousingLocationComponent } from './housing-location.component';


describe('BirthdayComponent', () => {
  let component: HousingLocationComponent;
  let fixture: ComponentFixture<HousingLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousingLocationComponent]
    });
    fixture = TestBed.createComponent(HousingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
