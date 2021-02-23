import { ViewStaffComponent } from './view-staff/view-staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  {path: 'addStudent', component: AddStudentComponent},
  {path: 'viewStudent', component: ViewStudentComponent},
  {path: 'addStaff', component: AddStaffComponent},
  {path: 'viewStaff', component: ViewStaffComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
