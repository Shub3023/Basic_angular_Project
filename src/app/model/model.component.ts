import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatListOption } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import{MatDatepickerModule} from '@angular/material/datepicker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button'; 
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FormsModule } from '@angular/forms';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { Router, RouterOutlet } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [ReactiveFormsModule,MatCard, MatFormField, MatLabel,MatOption,MatListOption,MatInputModule,MatSelectModule,MatNativeDateModule,
    MatDatepickerModule,MatDatepickerModule,MatCheckboxModule,MatButtonModule,NgxMaterialTimepickerModule,FormsModule,NgxMatTimepickerModule,
    RouterOutlet],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})
export class ModelComponent implements OnInit{

  // userForm = new FormGroup({
    // user: new FormControl(''),
    // fname: new FormControl(''),
    // lname: new FormControl(''),
    // dob: new FormControl(''),
    // time: new FormControl(''),
    // gender: new FormControl(''),
    // email: new FormControl(''),
    // mobile: new FormControl('')
  // });
// 
  // onSubmit() {
    // console.log(this.userForm.value);
  // }
  registerArray:any[]=[];

  signupForm!:FormGroup;
  data: any;
  constructor(private router:Router,private dialog:DialogRef<ModelComponent>,private dialog1: MatDialog,private fb: FormBuilder){
    this.signupForm= this.fb.group({
      user:[''], fname:[''],lname:[''],dob:[''],time:[''],
      gender:[''], email:[''],mobile:['']
    })
  };
  ngOnInit(): void {
   
  }

  onSubmit(){
    const existingData=JSON.parse(localStorage.getItem('registerArray') || '[]');
    localStorage.setItem('existingData',JSON.stringify(this.signupForm.value));
    //save data to json file
    // this.saveFormDataAsJson(this.signupForm.value);
}

// login(){
  // this.dialog.close();
  // this.router.navigate(['/login'])
  // this.dialog.open(ModelComponent, {
    // width: '800px',
    // height: 'auto',
    // maxWidth: '90vw',
    // maxHeight: '78vh',
  // });
// }
login() {
  this.dialog1.open(LoginComponent, {
    width: '800px',
    height: 'auto',
    maxWidth: '90vw',
    maxHeight: '78vh',
  });
}
 
//method of json data save
saveFormDataAsJson(data: any)
{
  const jsonData = JSON.stringify(data);
  const blob = new Blob([jsonData], { type: 'application/json' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'form-data.json';
  a.click();
  window.URL.revokeObjectURL(url);
}
}

