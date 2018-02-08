import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Upload } from './upload';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable()
export class UploadService {
  constructor( private db: AngularFireDatabase) { }
  private basePath:string = '/noticeboard';
  imageURL : any;
  //uploads: FirebaseListObservable<Upload[]>;
  pushUpload(upload: Upload) {
    return new Promise((resolve,reject)=>{
      let storageRef = firebase.storage().ref();
      let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>  {
          // upload in progress
          //upload.progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
        },
        (error) => {
          // upload failed
          console.log(error)
          reject(error);
        },
        () => {
          // upload success
          console.log("Done")
          upload.url = uploadTask.snapshot.downloadURL
          upload.name = upload.file.name
          console.log(upload);
          resolve(upload.url);
          //this.saveFileData(upload);
        }
      );
    });
  }
  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    console.log("Printing form the saveFileData function" + upload);
    this.db.list('/noticeboard').push(upload); 
  }
}
