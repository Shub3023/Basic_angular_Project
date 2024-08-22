import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelComponent } from '../model/model.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShowDataComponent } from '../show-data/show-data.component';
import { Router, RouterOutlet } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatCard } from '@angular/material/card';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatListOption } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,MatCard, MatFormField, MatLabel,MatOption,MatListOption,MatInputModule,MatSelectModule,MatNativeDateModule,
    MatDatepickerModule,MatDatepickerModule,MatCheckboxModule,MatButtonModule,NgxMaterialTimepickerModule,FormsModule,NgxMatTimepickerModule,
    RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  navigate:any
  loginForm!: FormGroup;

  constructor(
    private dialog: MatDialog,private router:Router,
    public dialogRef: MatDialogRef<LoginComponent>,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      mobile: [''],
    });
  }

  signup() {
    this.dialog.open(ModelComponent, {
      width: '800px',
      height: 'auto',
      maxWidth: '90vw',
      maxHeight: '78vh',
    });
  }

  login() {
    const data = this.loginForm.value;
    const existingData = JSON.parse(
      localStorage.getItem('existingData') || '[]'
    );
    if (existingData.email === data.email) {
      // alert('User is Valid.');
      this.dialogRef.close();
      this.router.navigate(['/tab'])
      
    
    } else {
      alert('Invalid User!!!');
    }
  }


  get() {
    const data = this.loginForm.value;
    const existingData = JSON.parse(
      localStorage.getItem('registerArray') || '[]'
    );
  }

  get email() {
    return this.loginForm.get('email');
  }

  get mobile() {
    return this.loginForm.get('mobile');
  }
}
function showJson() {
  throw new Error('Function not implemented.');
}

