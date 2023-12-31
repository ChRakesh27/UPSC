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
  FormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppService } from '../app.service';
import { ITopper } from '../model/ITopper.model';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-add-topics',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    CdkDropList,
    CdkDrag,
    MatTooltipModule,
    CdkDragPreview,
  ],
  templateUrl: './add-topics.component.html',
  styleUrl: './add-topics.component.css',
})
export class AddTopicsComponent implements OnInit {
  answerForm!: FormGroup;

  drop(event: CdkDragDrop<{ name: string; base64: File }[]>) {
    moveItemInArray(this.fileList, event.previousIndex, event.currentIndex);
  }

  fileList: { name: string; base64: File }[] = [];

  writtenByOpts: ITopper[] = [];
  paperOpts: string[] = [];
  subtopicOpts: string[] = [];
  topicOpts: string[] = [];

  obsWrittenByOpts: Observable<ITopper[]> | undefined;
  obsPaperOpts: Observable<string[]> | undefined;
  obsTopicOpts: Observable<string[]> | undefined;
  obsSubTopicOpts: Observable<string[]> | undefined;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.getAllToppers().subscribe((data) => {
      this.writtenByOpts = data;
    });
    this.service.getAllTopics().subscribe((data) => {
      for (let item of data) {
        if (!this.paperOpts.includes(item.paper))
          this.paperOpts.push(item.paper);

        if (!this.topicOpts.includes(item.topicName))
          this.topicOpts.push(item.topicName);

        if (!this.subtopicOpts.includes(item.subtopicName))
          this.subtopicOpts.push(item.subtopicName);
      }
      return this.writtenByOpts;
    });

    this.answerForm = new FormGroup({
      testCode: new FormControl(null, Validators.required),
      number: new FormControl(null, Validators.required),
      question: new FormControl(null, Validators.required),
      answer: new FormControl(null, Validators.required),
      images: new FormControl([]),
      written: new FormControl(null, Validators.required),
      paper: new FormControl(null, Validators.required),
      topicName: new FormControl(null, Validators.required),
      subtopicName: new FormControl(null, Validators.required),
    });

    this.obsWrittenByOpts = this.answerForm.get('written').valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return this.writtenByOpts.filter((item) =>
          item.name.toLowerCase().includes(name.toLowerCase()),
        );
      }),
    );

    this.obsPaperOpts = this.answerForm.get('paper').valueChanges.pipe(
      startWith(''),
      map((value) =>
        this.paperOpts.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase()),
        ),
      ),
    );

    this.obsTopicOpts = this.answerForm.get('topicName').valueChanges.pipe(
      startWith(''),
      map((value) =>
        this.topicOpts.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase()),
        ),
      ),
    );
    this.obsSubTopicOpts = this.answerForm
      .get('subtopicName')
      .valueChanges.pipe(
        startWith(''),
        map((value) =>
          this.subtopicOpts.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase()),
          ),
        ),
      );
  }

  displayFn(topper: ITopper): string {
    return topper && topper.name ? topper.name : '';
  }

  submit() {
    if (this.answerForm.valid) {
      const writtenByValue = this.answerForm.get('written').value;
      if (!writtenByValue._id) {
        alert('Invalid Written By');
        return;
      }
      this.answerForm.controls['images'].setValue(this.fileList);
      const payload = this.answerForm.value;
      payload.written = writtenByValue._id;

      this.service.addTopic(payload).subscribe(() => {
        this.answerForm.reset();
        this.fileList = [];
      });
    }
  }

  onFileSelect(e) {
    for (let file of e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt: any) => {
        if (file.size <= 1024 * 1024) {
          this.fileList.push({ name: file.name, base64: evt.target.result });
        } else {
          alert("file size large filename: " + file.name)
        };
      };

      reader.onerror = (evt: any) => {
        alert('error file loading');
      };
    }
  }

  onPaste(event: any) {
    const items = event.clipboardData.items;

    for (const item of items) {
      if (item.type.indexOf('image') === 0) {
        const blob = item.getAsFile();
        const filename = prompt(
          'Please enter file name:',
          `answer-${new Date().getTime()}.jpg`,
        );
        if (filename === null) {
          return;
        }
        const fileFromBlob: File = new File([blob], filename);

        const reader = new FileReader();
        reader.onload = (evt: any) => {
          if (fileFromBlob.size <= 1024 * 1024) {
            this.fileList.push({ name: filename, base64: evt.target.result });
          } else {
            alert("file size large")
          };
        };

        reader.onerror = (evt: any) => {
          alert('error file loading');
        };
        reader.readAsDataURL(blob);
      }
    }
  }
  onRemove(index) {
    this.fileList.splice(index, 1);
  }
}
