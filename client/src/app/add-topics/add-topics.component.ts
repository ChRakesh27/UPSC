import { CommonModule } from '@angular/common';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPreview,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
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
  selector: 'app-add-topics',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    CdkDropList,
    CdkDrag,
    CdkDragPreview],
  templateUrl: './add-topics.component.html',
  styleUrl: './add-topics.component.css'
})

export class AddTopicsComponent implements OnInit {
  answerForm!: FormGroup;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];

  filteredOptions: Observable<string[]> | undefined;
  drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(this.fileList, event.previousIndex, event.currentIndex);
  }

  fileList: { name: string; base64: File }[] = [];

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
  //--------------------------------------------------------------------------

  onPaste(event: any) {
    const items = event.clipboardData.items;
    console.log({ items });
    for (const item of items) {
      console.log(item.type);
      let blob = null;
      if (item.type.indexOf('image') === 0) {
        blob = item.getAsFile();
      }

      // load image if there is a pasted image
      if (blob !== null) {
        const filename = prompt(
          'Please enter file name:',
          `answer-${new Date().getTime()}.jpg`
        );
        const fileFromBlob: File = new File([blob], filename);

        const reader = new FileReader();
        reader.onload = (evt: any) => {
          console.log(evt.target.result);
          this.fileList.push({ name: filename, base64: evt.target.result });
        };
        reader.readAsDataURL(blob);
      }
    }
  }
  onRemove(index) {
    this.fileList.splice(index, 1);
  }


}
