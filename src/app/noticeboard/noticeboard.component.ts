import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.css']
})

export class NoticeboardComponent implements OnInit {
  modalDisplay : Boolean = false;
  imageAvail : Boolean = false;
  itemsRef: AngularFireList<any>;
  updates : Observable<any[]>;
  constructor(db:AngularFireDatabase) {
    this.itemsRef = db.list('/sticky');
    this.updates = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      );
    });

  }


  modalTrigger(){
    $('.modal').css('display', 'block');
    $('.modal-overlay').css('display', 'block');
    $('#modal3').animate({ 'max-height': '90%'}, 'slow');
    this.modalDisplay = !this.modalDisplay;
  }

  removeElement(key : string){
    console.log(key)
    this.itemsRef.remove(key);
  }

  hideMe(){
    //$('.modal').css('display','none');
    $('.modal-overlay').css('display','none');
    $('#modal3').animate({ 'max-height': '0%'}, 'slow');
  }

  ngOnInit() {
  }

}
