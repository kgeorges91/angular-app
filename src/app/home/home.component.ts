import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../core/core/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'angular-firebase-app';

  items: Observable<any[]>;
constructor(private db: AngularFirestore, public auth: AuthService){
  this.items = db.collection('items').valueChanges();
  }
  ngOnInit() {
  }

}
