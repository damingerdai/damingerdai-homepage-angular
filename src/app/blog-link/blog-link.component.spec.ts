import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLinkComponent } from './blog-link.component';

describe('BlogLinkComponent', () => {
  let component: BlogLinkComponent;
  let fixture: ComponentFixture<BlogLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BlogLinkComponent]
    });
    fixture = TestBed.createComponent(BlogLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
