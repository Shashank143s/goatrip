import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Google Firebase Storage and RealTime Database
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//ng-socket-io import for chat application
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
//import Emoji library
import {EmojiPickerModule} from 'ng-emoji-picker';
// import { AngularFireStorageModule } from 'firebase/storage';
 // import { MaterialModule } from './material-module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PeopleComponent } from './people/people.component';
import { CdtimerComponent } from './cdtimer/cdtimer.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { environment } from '../environments/environment';
import { ModalComponent } from './modal/modal.component';
//Services
import { UploadService } from './modal/shared/upload.service';
import { AppService } from './app.service';
import { ChatInterfaceComponent } from './chat-interface/chat-interface.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { SpinnerComponent } from './spinner/spinner.component'

//configuartion for socket.io connection
const config: SocketIoConfig = { url: 'https://intense-river-80828.herokuapp.com/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    PeopleComponent,
    CdtimerComponent,
    NoticeboardComponent,
    ModalComponent,
    ChatInterfaceComponent,
    ModalLoginComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    EmojiPickerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    // AngularFireStorageModule,
    // MaterialModule,
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [ UploadService, AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
