import { Component, OnInit } from '@angular/core';
import testData from '../../test.json'
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenu } from '@angular/material/menu';
import { MatMenuModule} from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-show-data',
  standalone: true,
  imports: [CommonModule,MatTableModule,MatSortModule,MatIconModule,MatMenu,MatToolbar,MatMenuModule,MatTableModule,MatTabsModule,HeaderComponent,LoginComponent],
  templateUrl: './show-data.component.html',
  styleUrl: './show-data.component.css'
})
export class ShowDataComponent {

  constructor(private router:Router){

  }

  displayedColumns = ['position', 'color', 'value'];
  // dataSource = ELEMENT_DATA;
  dataSource = testData;

  
  onTabChange(event: any) {
    const index = event.index;
    if (index === 0) {
      this.router.navigate(['/first']);
    } else if (index === 1) {
      this.router.navigate(['/second']);
    }
  }
  
  

}

export interface Element {
  position: number;
  color: string;
  value: string;
}

// const ELEMENT_DATA: Element[] = [
  // {position: 1, color: 'Hydrogen', value: "1.0079"},
  // {position: 2, color: 'Helium', value: "1.0079"},
  // {position: 3, color: 'Lithium', value: "1.0079"},
  // {position: 4, color: 'Beryllium', value: "1.0079"},
  // {position: 5, color: 'Boron', value: "1.0079"},
// ];





