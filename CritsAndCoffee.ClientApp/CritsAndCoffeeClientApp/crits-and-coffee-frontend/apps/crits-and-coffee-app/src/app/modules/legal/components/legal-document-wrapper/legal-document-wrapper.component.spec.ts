import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalDocumentWrapperComponent } from './legal-document-wrapper.component';

describe('LegalDocumentWrapperComponent', () => {
  let component: LegalDocumentWrapperComponent;
  let fixture: ComponentFixture<LegalDocumentWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalDocumentWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalDocumentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
