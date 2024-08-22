import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModelComponent } from './model/model.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'; 
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'; 
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ShowDataComponent } from './show-data/show-data.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabComponent } from './tab/tab.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ModelComponent, MatDialogModule, LoginComponent,MatNativeDateModule,CommonModule,MatButtonModule,NgxMaterialTimepickerModule,ShowDataComponent,SignUpComponent,RouterLink,RouterModule,HeaderComponent,FooterComponent,TabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: any;

  constructor(public dialog:MatDialog){}



}
