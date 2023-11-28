import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-add-answers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe],
  templateUrl: './add-answers.component.html',
  styleUrl: './add-answers.component.css'
})
export class AddAnswersComponent implements OnInit {
  answerForm!: FormGroup;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];

  filteredOptions: Observable<string[]> | undefined;
  constructor() { }

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
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
