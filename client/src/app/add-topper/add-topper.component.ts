import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppService } from '../app.service';
@Component({
  selector: 'app-add-topper',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,],
  templateUrl: './add-topper.component.html',
  styleUrl: './add-topper.component.css'
})
export class AddTopperComponent {
  topperForm!: FormGroup;
  constructor(private service: AppService) { }

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
      this.service.addTopper(this.topperForm.value).subscribe(() => {
        this.topperForm.reset()
      })
    }
  }
}
