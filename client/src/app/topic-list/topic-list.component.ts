import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AppService } from '../app.service';
import { ITopic } from '../model/ITopic.model';
import { Router } from "@angular/router";
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
  a: any;
  selectedTopicId = '';
  topper = {};

  constructor(
    private service: AppService,
    private router: Router
  ) {
    this.topper = this.router.getCurrentNavigation().extras.state;
    console.log("🚀 ~ this.topper:", this.topper)
    this.service.getTopicsWrittenByTopper(this.topper["_id"]).subscribe((data) => {
      this.topics = data;
    });
  }



  ngOnInit(): void {


  }

  // navigate(topic: ITopic) {
  //   this.router.navigate(['/topics/' + topic.topicName], {
  //     state: topic
  //   });
  // }

}
