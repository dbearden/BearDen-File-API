import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';



@Component({
  templateUrl: './file-list.component.html'
})
export class FileListComponent implements OnInit{

  
  myDataSource = new MatTableDataSource();
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.httpClient.get<UserFileInfo[]>("/api/Files").subscribe(data => this.myDataSource.data = data);
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
