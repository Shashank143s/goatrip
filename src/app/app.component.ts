import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  showSpinner : Boolean = true;
  title = 'Kabeela';

  ngOnInit(){
    setTimeout(()=>{
      this.showSpinner = false;
    },3000);
    this.notificationPermission();  
  }

  notificationPermission() {
    console.log("Notification");
    Notification.requestPermission();
  }
}
