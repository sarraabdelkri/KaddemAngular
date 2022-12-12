import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DetailsDepartmentComponent } from './details-department/details-department.component';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShowEtudiantsComponent } from './show-etudiants/show-etudiants.component';



@NgModule({
  declarations: [
    DepartmentsComponent,
    CreateDepartmentComponent,
    DetailsDepartmentComponent,
    ListDepartmentComponent,
    ShowEtudiantsComponent
  ],
  imports: [CommonModule, DepartmentsRoutingModule, FormsModule, NgxPaginationModule, ReactiveFormsModule],
})
export class DepartmentsModule { }
