import { Component, OnInit } from '@angular/core';
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
  selector: 'app-topper',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './topper.component.html',
  styleUrl: './topper.component.css'
})
export class TopperComponent implements OnInit {
  topperForm!: FormGroup;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.topperForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      rank: new FormControl(null, Validators.required),
      year: new FormControl(null, Validators.required),
      gs_1_marks: new FormControl(null, Validators.required),
      gs_2_marks: new FormControl(null, Validators.required),
      gs_3_marks: new FormControl(null, Validators.required),
      gs_4_marks: new FormControl(null, Validators.required),
      essay_marks: new FormControl(null, Validators.required),
      prelims_score_gs: new FormControl(null, Validators.required),
      prelims_score_csat: new FormControl(null, Validators.required),
      optional_subject: new FormControl(null, Validators.required),
      optional_1_marks: new FormControl(null, Validators.required),
      optional_2_marks: new FormControl(null, Validators.required),
      remarks: new FormControl(null, Validators.required),

    });
  }



  submit() {
    if (this.topperForm.valid) {
      // this.service
      //   .addQuestion(this.questionForm.value)
      //   .subscribe(() => {
      //     this.questionForm.reset();
      //   });
    }
  }
}
