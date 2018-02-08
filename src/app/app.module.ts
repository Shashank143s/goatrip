import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
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
import { ChatInterfaceComponent } from './chat-interface/chat-interface.component'

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    PeopleComponent,
    CdtimerComponent,
    NoticeboardComponent,
    ModalComponent,
    ChatInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    // AngularFireStorageModule,
    // MaterialModule,
    FormsModule
  ],
  providers: [ UploadService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
