import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTabletopMatch } from './create-tabletop-match';

describe('CreateTabletopMatch', () => {
  let component: CreateTabletopMatch;
  let fixture: ComponentFixture<CreateTabletopMatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTabletopMatch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTabletopMatch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
