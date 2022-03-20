import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAssitantDataSaveComponent } from './business-assitant-data-save.component';

describe('BusinessAssitantDataSaveComponent', () => {
  let component: BusinessAssitantDataSaveComponent;
  let fixture: ComponentFixture<BusinessAssitantDataSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessAssitantDataSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAssitantDataSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
