import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletestudents',
  templateUrl: './deletestudents.component.html',
  styleUrls: ['./deletestudents.component.css']
})
export class DeletestudentsComponent implements OnInit {

  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  id: any;
  student: any = {
    name: '',
    age: '',
    level: '',
    contact:''
  };

  ngOnInit() {
    this.getOneStudent();
  }
  getOneStudent(){
    this.id = this.route.snapshot.paramMap.get("id")
    this.db.collection('students').doc(this.id).ref.get()
    .then((stud) => {
      this.student = stud.data();
    })
    .catch((error) => console.log('Error:', error));
  }
  deleteStudent(form){
    const deletedStudent: any = {
      name: form.name,
      age: form.age,
      level: form.level,
      contact: form.contact
    }
    this.db.collection('students').doc(this.id).delete()
    .then(() => {
      console.log('Succesfully removed!')
    })
    .catch((error) => console.log('Error', error));
  }

}
