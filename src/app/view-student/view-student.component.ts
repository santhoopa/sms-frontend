import { ApiHttpService } from './../api-http.service';
import { Component, OnInit } from '@angular/core';
const data =[
  // {StudentID:1,StudentName:"Pramodi Herath",gender:"F",DoB:"2005-05-03T00:00:00.000Z",PostalAddress:"34A,postalAdd",Major:"Science",Email:"hgs@gmail.com"},
  // {StudentID:1,StudentName:"Pramodi Herath",gender:"F",DoB:"2005-05-03T00:00:00.000Z",PostalAddress:"34A,postalAdd",Major:"Science",Email:"hgs@gmail.com"},
  // {StudentID:1,StudentName:"Pramodi Herath",gender:"F",DoB:"2005-05-03T00:00:00.000Z",PostalAddress:"34A,postalAdd",Major:"Science",Email:"hgs@gmail.com"},
]
@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})

export class ViewStudentComponent implements OnInit {
  displayedColumns: string[] = ['studentID','StudentName','gender','PostalAddress','Major','Email'];
  dataSource = data;
  data_source_get_by_id = null;
  all_student_details = null;
  //private patientsSub: Subscription;
  apps=[{},{}]
  showTable=true;
  showForm=false;
  constructor(public apiService: ApiHttpService) { }

  ngOnInit(): void {
    this.getAllStudentDetails();
    //this.getStudentByID("1");
  }

  getAllStudentDetails(){
    this.apiService.getAllStudentDetails().subscribe(result => {
      console.log(result.recordset);
      this.dataSource = result.recordset;
    })
  }

  getStudentByID(id:any){
    this.apiService.getOneStudent().subscribe(result => {
      console.log(result.recordset);
      this.data_source_get_by_id = result.recordset;
    })
  }
}
