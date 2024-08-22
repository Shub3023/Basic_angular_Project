import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { ShowDataComponent } from '../show-data/show-data.component';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [HeaderComponent,MatTableModule,MatSortModule,MatIconModule,MatMenu,MatToolbar,MatMenuModule,MatTableModule,MatTabsModule,ShowDataComponent],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {

}
