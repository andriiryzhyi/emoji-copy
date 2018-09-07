import { Component, Input, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-emoji-item',
  templateUrl: './emoji-item.component.html',
  styleUrls: ['./emoji-item.component.scss']
})
export class EmojiItemComponent implements OnInit {

  @Input('emoji') emoji;

  constructor() { }

  ngOnInit() {
  }

  selectEmoji(emoji) {
    console.log(emoji);
  }

  popover(skins) {
    $('[data-toggle="popover"]').popover({
      trigger: 'click',
      delay: 200,
      template: `
        <div class="card">
          <div class="card-body d-flex">
            <span class="emoji-item" (click)="selectEmoji(emoji_skin)">
              <div class="img-${skins[0].unified.toLowerCase()} sm-emoji"></div>
            </span>
          </div>
        </div>
      `
    });
  }

}
