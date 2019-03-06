import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirestoreSettingsToken } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { EditstudentsComponent } from './editstudents/editstudents.component';
import { DeletestudentsComponent } from './deletestudents/deletestudents.component';
import { ShowstudentsComponent } from './showstudents/showstudents.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    AddstudentsComponent,
    EditstudentsComponent,
    DeletestudentsComponent,
    ShowstudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [{provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
