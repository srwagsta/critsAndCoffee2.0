import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLicenseComponent } from './project-license.component';

describe('ProjectLicenseComponent', () => {
  let component: ProjectLicenseComponent;
  let fixture: ComponentFixture<ProjectLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
