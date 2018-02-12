import { Component, OnInit } from '@angular/core';
import { people } from '../../data/people';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  loginSetup(){
    var pword = $('#pword').val();
    var uname = $('#uname').val();
    if(pword === '' || uname === '' || uname === undefined){
      alert('Please enter correct details');
    }
    else if(pword === 'Kabeela' || uname !== '' ){
      localStorage.setItem('username',uname);
      people.forEach(data=>{
        if(data.name === uname){
        localStorage.setItem('imagesrc',data.imageurl[0]);
      }
      });
      $('.modal').css('display', 'none');
      console.log(localStorage.getItem('imagesrc'));
    }
    else{
      alert('Username or Password wrong!');
    }
  }

}
