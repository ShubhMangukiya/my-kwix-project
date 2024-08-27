import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkInBioComponent } from './link-in-bio.component';

describe('LinkInBioComponent', () => {
  let component: LinkInBioComponent;
  let fixture: ComponentFixture<LinkInBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkInBioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkInBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
