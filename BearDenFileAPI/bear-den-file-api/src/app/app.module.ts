import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header.component';
import { FileListComponent } from './file-list.component';
import { FileDetailsComponent } from './file-details.component';
import { EditDialog } from './file-details.component';

const appRoutes: Routes = [
  { path: 'Files', component: FileListComponent },
  { path: 'Details/:fileId', component: FileDetailsComponent },
  { path: '', redirectTo: '/Files', pathMatch: 'full'},
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    FileListComponent,
    FileDetailsComponent,
    EditDialog
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  entryComponents: [
    EditDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
