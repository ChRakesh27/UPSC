import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topper',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './topper.component.html',
  styleUrl: './topper.component.css'
})
export class TopperComponent {

}
