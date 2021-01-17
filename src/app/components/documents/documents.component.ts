import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents;
  constructor(private db: DbService,) { }

  ngOnInit(): void {
    this.documents = this.db.getDocuments();
  }

  downloadFile(file: File){

  }

}
