import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITopic } from '../model/ITopic.model';
import { AppService } from '../app.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css',
})
export class TopicComponent implements OnInit {
  topic: {};

  constructor(
    private service: AppService,
    private router: Router,
  ) {

    this.topic = (this.router.getCurrentNavigation().extras.state);
    console.log("🚀 ~ this.router:", typeof (this.topic))
  }

  ngOnInit(): void {
    // this.router.params.subscribe((params) => {
    //   console.log('🚀 ~ params:', params['id']);
    //   if (!params['id']) {
    //     return;
    //   }

    //   this.service.getTopicById(params['id']).subscribe((data) => {
    //     this.topic = data;
    //   });
    // });
  }
}
