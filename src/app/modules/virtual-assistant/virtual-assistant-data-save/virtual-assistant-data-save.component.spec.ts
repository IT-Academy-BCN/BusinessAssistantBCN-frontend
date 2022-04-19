import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualAssistantDataSaveComponent } from './virtual-assistant-data-save.component';

describe('VirtualAssistantDataSaveComponent', () => {
  let component: VirtualAssistantDataSaveComponent;
  let fixture: ComponentFixture<VirtualAssistantDataSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualAssistantDataSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualAssistantDataSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
