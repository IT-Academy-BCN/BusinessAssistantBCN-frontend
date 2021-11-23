import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationNavComponent } from './information-nav.component';

describe('InformationNavComponent', () => {
  let component: InformationNavComponent;
  let fixture: ComponentFixture<InformationNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
