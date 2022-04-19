import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualAssistantPageComponent } from './virtual-assistant-page.component';

describe('VirtualAssistantPageComponent', () => {
  let component: VirtualAssistantPageComponent;
  let fixture: ComponentFixture<VirtualAssistantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualAssistantPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualAssistantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
