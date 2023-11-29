import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AppService } from '../app.service';
import { run } from 'node:test';
import { ITopic } from '../model/ITopic.model';

@Component({
  selector: 'app-topic-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.css',
})
export class TopicListComponent implements OnInit {
  topics: ITopic[] = [];
  selectedTopic = {};
  selectedTopicId = '';
  constructor(
    private service: AppService,
    private router: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      console.log('🚀 ~ params:', params['id']);
      if (!params['id']) {
        return;
      }
      this.service.getTopicsWrittenByTopper(params['id']).subscribe((data) => {
        this.topics = data;
        this.selectedTopicId = data[0];
      });

      this.service.getTopicById(this.selectedTopicId).subscribe((data) => {
        this.selectedTopic = data;
      });
    });
  }
}
