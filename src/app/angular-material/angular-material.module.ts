import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      MatButtonModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      MatTableModule,
      MatSortModule,
      MatDatepickerModule,
      MatMomentDateModule,
      FlexLayoutModule,
      MatIconModule
  ],
  exports: [
      MatButtonModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      MatTableModule,
      MatSortModule,
      MatDatepickerModule,
      MatMomentDateModule,
      FlexLayoutModule,
      MatIconModule
  ]
})
export class AngularMaterialModule { }
