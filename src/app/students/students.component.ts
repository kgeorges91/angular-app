import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: any[] = [];
  singleStudent: any = {};
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents(){ 
    this.db.collection('students').ref.get()
    .then((data) => {
        data.forEach((student) => {
          this.singleStudent = {
            id: student.id,
            data: student.data()
          };
          this.students.push(this.singleStudent)
        })
    })
    .catch((error) => console.log('Error:', error));
  }

  deleteStudent(id){ 
    this.db.collection('students').doc(id).delete()
    .then(() => {
      alert('Are you sure?')
      location.reload();
      console.log('Deleted')})
    .catch((error) => console.log('Error:', error));
  }
  
}
