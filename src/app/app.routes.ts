import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { Component } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ModelComponent } from './model/model.component';
import { TabComponent } from './tab/tab.component';

export const routes: Routes = [
    // {path:'',redirectTo:'',pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'show', component:ShowDataComponent},
    {path:'', component:SignUpComponent},
    {path:'modal',component:ModelComponent},
    {path:'tab', component:TabComponent}
];
