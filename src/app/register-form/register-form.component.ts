import { Component, OnInit, Inject } from '@angular/core';
import {FormControl,  FormGroup, NgForm, Validators} from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Client } from '../services/client-model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../shared/dialog/dialog.component';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  validateForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    nameControl : new FormControl('', [
      Validators.required,
    ]),
    lastNameControl : new FormControl('', [
      Validators.required,
    ]),
    dateFomrControl : new FormControl('', [
      Validators.required,
    ]),
    genderFormControl : new FormControl('', [
      Validators.required,
    ])
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private clientService: ClientService,
    public dialog: MatDialog
    ) { }

  openDialog(client: Client): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { name: client.firstName }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
  }
  async onSubmit() {
      const lastId = await this.clientService.getLastClient().toPromise();
      const requestClient = new Client(
        lastId + 1,
        this.validateForm.get('nameControl').value,
        this.validateForm.get('lastNameControl').value,
        this.validateForm.get('emailFormControl').value,
        this.validateForm.get('dateFomrControl').value,
        this.validateForm.get('genderFormControl').value,
      );

      this.clientService.saveClient(requestClient).subscribe( () => {
        this.openDialog(requestClient);
    });
  }


}
