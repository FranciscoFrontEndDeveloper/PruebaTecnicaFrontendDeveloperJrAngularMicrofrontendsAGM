import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormcreationComponent } from '../formcreation/formcreation.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { CaractercreationService } from '../../services/caracters/caractercreation.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormcreationComponent,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.sass',
})
export class DialogComponent {
  form!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { fields: string[] },
    private formBuilder: FormBuilder,
    private caractercreationService: CaractercreationService,
    private matDialogRef: MatDialogRef<DialogComponent>,
    private matSnackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      created: '',
      episode: '',
      gender: '',
      image: '',
      location: '',
      name: '',
      origin: '',
      species: '',
      status: '',
      type: '',
      url: '',
    });
  }

  ngOnInit(): void {
    const groupConfig: Record<string, any> = {};
    this.data.fields.forEach((field) => {
      groupConfig[field] = [''];
    });

    this.form = this.formBuilder.group(groupConfig);
  }

  onSubmit() {
    this.caractercreationService.saveForData(this.form.value);
    this.matDialogRef.close(this.form.value);
    this.matSnackBar.open(
      'Tu informacion se ha guardado en el localstorage',
      'cerrar',
      {
        duration:10000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
  }
}
