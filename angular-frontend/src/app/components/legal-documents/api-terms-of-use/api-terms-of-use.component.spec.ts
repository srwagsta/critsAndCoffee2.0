import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTermsOfUseComponent } from './api-terms-of-use.component';

describe('ApiTermsOfUseComponent', () => {
  let component: ApiTermsOfUseComponent;
  let fixture: ComponentFixture<ApiTermsOfUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiTermsOfUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTermsOfUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
