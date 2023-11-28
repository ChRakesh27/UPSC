import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topper-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './topper-list.component.html',
  styleUrl: './topper-list.component.css'
})
export class TopperListComponent implements OnInit {
  title = 'client';
  toppers_List: any;
  constructor(private service: AppService) { }
  ngOnInit(): void {
    this.service.getAllToppers().subscribe(list => {
      this.toppers_List = list
    })
  }
}


