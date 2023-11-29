import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ITopper } from '../model/ITopper.model';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-topper',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatTableModule],
  templateUrl: './topper.component.html',
  styleUrl: './topper.component.css'
})
export class TopperComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public topper: ITopper) {
  }
  topperColumn = [
    "name",
    "rank",
    "year",
    "gs_1_marks",
    "gs_2_marks",
    "gs_3_marks",
    "gs_4_marks",
    "essay_marks",
    "prelims_score_gs",
    "prelims_score_csat",
    "optional_subject",
    "optional_1_marks",
    "optional_2_marks",
    "remarks"]
}
