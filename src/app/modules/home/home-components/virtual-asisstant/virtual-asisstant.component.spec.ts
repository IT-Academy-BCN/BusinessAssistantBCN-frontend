import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualAsisstantComponent } from './virtual-asisstant.component';

describe('VirtualAsisstantComponent', () => {
  let component: VirtualAsisstantComponent;
  let fixture: ComponentFixture<VirtualAsisstantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualAsisstantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualAsisstantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
