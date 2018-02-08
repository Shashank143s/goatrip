import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdtimer',
  templateUrl: './cdtimer.component.html',
  styleUrls: ['./cdtimer.component.css']
})

export class CdtimerComponent implements OnInit {
  days: number;
  hours: number;
  minutes: any;
  seconds: any;
  hourString: String;
  minuteString: String;
  secondString: String;
  dayString: String;

  constructor() {
    this.updateTimer();
  }

  ngOnInit(){
    setInterval(()=>{ //use of arrow function or else using anonymous function will update the wromg value of this refer MDN docs of setInterval
      this.updateTimer();
    },1000);
  }

  updateTimer(){
      this.seconds = ((Date.parse('March 16, 2018 00:00:00') - Date.now())/1000);
      this.minutes = this.seconds/60;
      this.hours = this.minutes/60;
      this.days = this.hours/24;
      this.hourString = (this.hours%24).toString().split('.')[0];
      this.minuteString = (this.minutes%60).toString().split('.')[0];
      this.secondString = (this.seconds%60).toString().split('.')[0];
      this.dayString = (this.days).toString().split('.')[0];
  }

}
