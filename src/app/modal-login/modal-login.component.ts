import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { people } from '../../data/people';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  @Output()
  loggedIn : EventEmitter<any> = new EventEmitter<any>();
  userExists:Boolean =false;
  constructor() { }

  ngOnInit() {}

  loginSetup(){
    let pword = $('#pword').val();
    let uname = $('#uname').val();
    if (pword === '' || uname === '' || uname === undefined) {
      alert('Please enter correct details');
    }
    else if (pword === 'Kabeela' && uname !== '' ) {
      localStorage.setItem('username', uname);
      people.forEach(data => {
        if (data.name === uname) {
          localStorage.setItem('imagesrc', data.imageurl[0]);
          this.userExists = true;
        }
      });
      if(!this.userExists){
        alert("Username is incorrect");
      }
      else{
        $('.modal').animate({ 'right' : '-30%'}, 'slow');
        this.loggedIn.emit(true);
      }
    }
    else {
      alert('Username or Password wrong!');
    }
  }

  closeLoginModal(){
    $('.modal').animate({ 'right' : '-30%'},'slow');
  }

}
