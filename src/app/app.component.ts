import { Component, OnInit, ViewChild } from '@angular/core';
import { flags } from './emoji-data/flags';
import { smileysPeople } from './emoji-data/smileys_people';
import { animalsNature } from './emoji-data/animals_nature';
import { foodDrink } from './emoji-data/food_drink';
import { activities } from './emoji-data/activities';
import { travelsPlaces } from './emoji-data/travels_places';
import { objects } from './emoji-data/objects';
import { symbols } from './emoji-data/symbols';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  smileysPeople = smileysPeople;
  animalsNature = animalsNature;
  foodDrink = foodDrink;
  activities = activities;
  travelsPlaces = travelsPlaces;
  objects = objects;
  symbols = symbols;
  flags = flags;

  emojiData = [
    { emojis: this.smileysPeople, category: 'Smileys & People', title: 'Смайлики и люди' },
    { emojis: this.animalsNature, category: 'Animals & Nature', title: 'Животные и природа' },
    { emojis: this.foodDrink, category: 'Food & Drink', title: 'Еда и напитки' },
    { emojis: this.activities, category: 'Activity', title: 'Активность' },
    { emojis: this.travelsPlaces, category: 'Travel & Places', title: 'Путешествия и места' },
    { emojis: this.objects, category: 'Objects', title: 'Обьекты' },
    { emojis: this.symbols, category: 'Symbols', title: 'Символы' },
    { emojis: this.flags, category: 'Flags', title: 'Флаги' }
  ];

  @ViewChild('skinsTrigger') skinsTrigger;

  constructor() {}

  ngOnInit() {

  }

  selectEmoji(emoji) {
    console.log(emoji);
  }

}
