import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITopic } from '../model/ITopic.model';
import { AppService } from '../app.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css'
})
export class TopicComponent implements OnInit {
  topic: ITopic | undefined;
  constructor(private service: AppService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      console.log("🚀 ~ params:", params["id"])
      if (!params["id"]) {
        return
      }
      this.service.getTopicById(params["id"]).subscribe((data) => {
        this.topic = data
        // console.log("🚀 ~ data:", data)
      })
    })
  }
}
