import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletopMatch } from './tabletop-match';

describe('TabletopMatch', () => {
  let component: TabletopMatch;
  let fixture: ComponentFixture<TabletopMatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabletopMatch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabletopMatch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
