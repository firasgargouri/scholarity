import { Injectable } from '@angular/core';
import { DocumentSch } from '../models/documentSch';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  students=[];
  teachers=[];
  documents=[];
  constructor() { }

  getStudents(){
    return this.students;
  }

  addStudent(student: Student){
    console.log(student);
    this.students.push(student);
  }

  getDocuments(){
    return this.documents;
  }

  addDocument(document: DocumentSch){
    console.log(document);
    this.documents.push(document);
  }
}
