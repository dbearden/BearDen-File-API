import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import 'rxjs/add/operator/switchMap';



@Component({
  templateUrl: './file-details.component.html'
})
export class FileDetailsComponent implements OnInit {
  file: UserFileInfo;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }
  ngOnInit() {
    let fileId = this.route.snapshot.paramMap.get('fileId');
    console.log(fileId);
    this.http.get<UserFileInfo>("/api/Files/" + fileId ).subscribe(data => this.file = data);
  }



  edit() {
    let dialogRef = this.dialog.open(EditDialog, {
      width: '300px',
      

    });
    console.log("dialoging");
  }
  
  delete() {
    this.http.delete('/api/Files/' + this.file.fileId).subscribe();
    this.router.navigateByUrl("");
  }

}

@Component({ templateUrl:'./edit-dialog.component.html' })
export class EditDialog {
  constructor(public dialogRef: MatDialogRef<EditDialog>, private http: HttpClient) { }

  onClick(file: HTMLInputElement) {

    var f = file.files[0];

    this.http.put('/api/Files/' + f.name, f, { reportProgress: true, observe: 'events' }).subscribe(event => {
      console.log(event);
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}


export interface UserFileInfo {
  filename: string;
  size: number;
  uploaded: string;
  modified: string;
  owner: string;
  fileId: string;
}
