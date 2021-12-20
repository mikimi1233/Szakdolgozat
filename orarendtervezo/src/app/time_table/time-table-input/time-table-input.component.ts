import { EditComponent } from './../../shared/dialog/time-table-datatable/edit/edit.component';
import { AddComponent } from './../../shared/dialog/time-table-datatable/add/add.component';
import { DeleteComponent } from './../../shared/dialog/time-table-datatable/delete/delete.component';
import { ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface TimeTableInputInterface {
  ID: number;
  SUBJECT_NAME: string;
  DAY: string;
  SUBJECT_WEIGHT: string;
  CLASS_START_TIME: string;
  CLASS_END_TIME: string;
  SAME_SUBJECT: string;
  CLASSROOM: string;
  TEACHER: string;
  CREDIT: number;
  PRIORITY: number;
  COLOR: string;
}
var ELEMENT_DATA: TimeTableInputInterface = 
  {ID: 1, SUBJECT_NAME: 'Magprog', DAY: "Monday", SUBJECT_WEIGHT: 'Mandatoriy', CLASS_START_TIME: '10:40', 
  CLASS_END_TIME: '11:50', SAME_SUBJECT: '', CLASSROOM: 'C/111', TEACHER: 'Troll', CREDIT: 1, PRIORITY: 9, COLOR: '#ff6347'};
@Component({
  selector: 'app-time-table-input',
  templateUrl: './time-table-input.component.html',
  styleUrls: ['./time-table-input.component.css']
})
export class TimeTableInputComponent{

  ID = 1;
  form: FormGroup = new FormGroup({});

  constructor (
    public authService: AuthService,
    public matDialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef
    ) {
  }
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'subjectName', 'day', 'subjectWeight', 'classStartTime', 
                                'classEndTime', 'sameSubject', 'classroom',  'teacher', 'credit', 'priority', 'color', 'buttons'];
  dataSource = new MatTableDataSource<TimeTableInputInterface>([]);
  dataSource2 = new MatTableDataSource<TimeTableInputInterface>([]);
  get timeTableInputGet() {
    return this.form.controls;
  }

  submit() {}

  openAddDialog() {
    this.matDialog.open(AddComponent, {data: {ID: this.ID},
    }).afterClosed().subscribe(result => {
      if(!!result){
      this.ID++;
      this.dataSource.data.push(result);
      this.dataSource.data = this.dataSource.data;
      }
    });
  }

  openEditDialog(index: number, id: number, subjectName: string, day: string, subjectWeight: string, classStartTime: string, 
    classEndTime: string, sameSubject: string, classroom: string, teacher: string, credit: number, priority: number, color: string) {
      const dialog = this.matDialog.open(EditComponent, {data: {issues: {}}});
    }

  openDeleteDialog(index: number, subjectName: string) {
    const dialog = this.matDialog.open(DeleteComponent, {data: {issues: {}}});
  }
}
