import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiItemComponent } from './emoji-item.component';

describe('EmojiItemComponent', () => {
  let component: EmojiItemComponent;
  let fixture: ComponentFixture<EmojiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
