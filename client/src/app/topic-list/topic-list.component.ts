import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topic-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.css'
})
export class TopicListComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }
}
