import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ModelComponent } from '../model/model.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, MatDialogModule,MatNativeDateModule,MatDatepickerModule,RouterLink,RouterModule],
  providers:[MatDatepickerModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private dialog: MatDialog, private modalService:NgbModal) {}

  sign() {
    this.dialog.open(LoginComponent, { 
      width: '800px',
      height: 'auto',
      maxWidth: '90vw',
      maxHeight: '74vh'
    });
  }

}
