import { Component,ViewChild,OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {

    ngOnInit(){
      $('.modal').css('display', 'block');
    }

    toggleSideNav(){
      $('.tap-target').tapTarget('open');
      $('.tap-target-content').css('padding','0px');
    }

}
