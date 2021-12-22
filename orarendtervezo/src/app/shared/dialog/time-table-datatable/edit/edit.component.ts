import { Component, Inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AddComponent, TimeTableInputInterface } from '../add/add.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent{

  form: FormGroup = new FormGroup({});

  constructor (
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TimeTableInputInterface,
    private fb: FormBuilder,
    public authService: AuthService
    ) {
    this.form = fb.group({
      subjectName: ['', [
        Validators.required,
      ]],
      day: ['', [
        Validators.required,
      ]],
      subjectWeight: ['', [
        Validators.required,
      ]],
      classStartTime: ['', [
        Validators.required,
        Validators.pattern('([1]?[0-9]|2[0-3]):[0-5][0-9]')
      ]],
      classEndTime: ['', [
        Validators.required,
        Validators.pattern('([1]?[0-9]|2[0-3]):[0-5][0-9]')
      ]],
      sameSubject: ['', []],
      classroom: ['', [
        Validators.pattern('[A-Z][/][a-z0-9A-Z]+')
      ]],
      teacher: ['', [ ]],
      credit: ['', [ 
        Validators.pattern('[0-9]+'),
      ]],
      priority: ['', [
        Validators.pattern('[0-9]+'),
      ]],
      colorPick: ['', [ ]]
    })
  }

  get timeTableInputGet() {
    return this.form.controls;
  }

  submit() { }


  cancelClick() {
  this.dialogRef.close();
  }
}
