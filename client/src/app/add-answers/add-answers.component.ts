import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-add-answers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './add-answers.component.html',
  styleUrl: './add-answers.component.css'
})
export class AddAnswersComponent {
  answerForm!: FormGroup;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.answerForm = new FormGroup({
      testCode: new FormControl(null, Validators.required),
      number: new FormControl(null, Validators.required),
      year: new FormControl(null, Validators.required),
      question: new FormControl(null, Validators.required),
      answer: new FormControl(null, Validators.required),
      images: new FormControl(null, Validators.required),
      written: new FormControl(null, Validators.required),
      paper: new FormControl(null, Validators.required),
      topicName: new FormControl(null, Validators.required),
      subtopicName: new FormControl(null, Validators.required),
    });
  }



  submit() {
    if (this.answerForm.valid) {
      // this.service
      //   .addQuestion(this.questionForm.value)
      //   .subscribe(() => {
      //     this.questionForm.reset();
      //   });
    }
  }
}
