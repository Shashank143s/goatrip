import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
// import { AngularFireStorage } from 'firebase/storage';
import { UploadService } from './shared/upload.service';
import { Upload } from './shared/upload';
import * as firebase from 'firebase/app';
import { people } from "../../data/people";
declare var jquery: any;
declare var $: any;

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  @Input() modalToggler: Boolean = false;
  creator: Array<Object> = [];
  noticeColor: string;
  noticeImage: any;
  noticeContent: string;
  noticeTitle: string;
  noticeCreator: string;
  itemsRef: AngularFireList<any>;
  updates: Observable<any[]>;
  selectedFiles: FileList;;
  imgsrc: any;
  currentUpload: Upload;
  selectedOption: any;
  uploading : Boolean = false;
  uploaded : Boolean = false;


  constructor(private db: AngularFireDatabase, private upSvc: UploadService) {
    this.itemsRef = db.list("/sticky");
    this.updates = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ngOnInit() {
    if (!this.modalToggler) {
      this.setData().then(data => {
        console.log(data);
        $("select").material_select();
      });
    }
  }

  addElement() {
    this.itemsRef.push({
      color: this.noticeColor,
      content: this.noticeContent,
      image: this.noticeImage,
      name: this.noticeCreator,
      title: this.noticeTitle
    });
  }

  removeElement(key: string) {
    console.log(key);
    this.itemsRef.remove(key);
  }

  setData() {
    return new Promise((resolve, reject) => {
      const data = people.forEach((data) => {
        this.creator.push({ name : data.name });
      });
      console.log(this.creator);
      return resolve("done");
    });
  }

  hideMeNow() {
    //$(".modal").css("display", "none");
    $(".modal-overlay").css("display", "none");
    $('#modal3').animate({ 'max-height': '0%' }, 'slow');
  }

  setNoticeColor(event) {
    this.noticeColor = event.target.value;
    console.log(this.noticeColor);
  }

  formSubmit(submittedValues) {
    console.log(submittedValues);
    this.noticeCreator = $('.select-dropdown').val();
    console.log(this.noticeCreator);
    this.noticeTitle = submittedValues.value.title;
    this.noticeContent = submittedValues.value.content;
    this.addElement();
    submittedValues.reset();
    $('.select-dropdown').val ='';
    this.hideMeNow();
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    if(this.selectedFiles){
      this.uploading = true;
      let file = this.selectedFiles.item(0);
      this.currentUpload = new Upload(file);
      this.upSvc.pushUpload(this.currentUpload).then((data) => {
        this.noticeImage = data;
        this.uploading = false;
        this.uploaded = true;
      });
    }
    else{
      alert('Please select an image to upload!');
    }
  }

  clickedOption(event) {
    this.selectedOption = event.target.value;
    console.log(this.selectedOption);
  }


}
