import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { people } from '../../data/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  encapsulation : ViewEncapsulation.Native
})


export class PeopleComponent implements OnInit {
  peoples = people;
  constructor() { }

  ngOnInit() {
  }

}
