import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent implements OnInit {

  constructor(private db : AngularFirestore, private router: Router) { }

  ngOnInit() {
  }
    addStudent(form){
      const student: any = {
        name: form.fullName,
        age: form.age,
        level: form.level,
        contact: form.contact
      }
      this.db.collection('students').add(student)
      .then(() => {
        console.log('Succesfully created');
        this.router.navigate(['/students']);
      })
      .catch((error) => console.log('Error:', error));
    }
    }

