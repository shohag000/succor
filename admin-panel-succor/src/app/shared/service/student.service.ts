import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firestore: AngularFirestore) { }

  createNewStudent(record) {
    return this.firestore.collection('student').add(record);
  }

  readStudents() {
    return this.firestore.collection('student').snapshotChanges();
  }

  updateStudent(recordID,record){
    this.firestore.doc('student/' + recordID).update(record);
  }

  delete_Student(recordID) {
    this.firestore.doc('student/' + recordID).delete();
  }
}
