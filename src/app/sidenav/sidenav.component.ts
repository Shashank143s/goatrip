import { Component, ViewChild, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
    modalVisibility: Boolean = false;
    loggedInBtn : boolean = true;
    loggedUser : String;

    ngOnInit() {
    }

    toggleSideNav() {
      $('.tap-target').tapTarget('open');
      $('.tap-target-content').css('padding', '0px');
    }

    showLoginModal() {
      $('.modal').css('display', 'block');
      $('.modal').animate({ 'right' : '0px'},'slow');
    }

    maximizeChatWindow() {
      $('.wrapper').animate({ 'max-height': '520px'}, 'slow');
    }

    loggedInData(data){
      this.loggedInBtn = !data;
      this.loggedUser = localStorage.getItem('username');

    }

}
