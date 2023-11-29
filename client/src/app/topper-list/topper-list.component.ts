import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TopperComponent } from '../topper/topper.component';
@Component({
  selector: 'app-topper-list',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatDialogModule],
  templateUrl: './topper-list.component.html',
  styleUrl: './topper-list.component.css',
})
export class TopperListComponent implements OnInit {
  title = 'client';
  model = true;
  toppers: any;
  constructor(
    private service: AppService,
    public dialog: MatDialog,
  ) {}
  ngOnInit(): void {
    this.service.getAllToppers().subscribe((list) => {
      this.toppers = list;
    });
  }

  openDialog(topper: any) {
    const dialogRef = this.dialog.open(TopperComponent, { data: topper });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
