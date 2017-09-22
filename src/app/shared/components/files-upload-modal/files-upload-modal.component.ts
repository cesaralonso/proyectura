import { FilesUploadModalService } from './file-upload-modal.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Response } from '@angular/http';
import { Component, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'files-service-modal',
  styleUrls: [('./files-upload-modal.component.scss')],
  templateUrl: './files-upload-modal.component.html'
})
export class FilesUploadModalComponent implements OnInit {

  id: number;
  referencia: string;
  files: any[];

  constructor(private service: FilesUploadModalService, 
              private activeModal: NgbActiveModal) {
  }

  closeModal() {
    this.activeModal.close();
  }

  ngOnInit() {
    this.getFiles();
  }

  getFiles() {
    this.service.getFiles(this.id, this.referencia)
      .subscribe(
        (data) => this.files = data,
      );
  }
}
