import { ApiHttpService } from './../api-http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {
  displayedColumns: string[] = ['studentID','StudentName','gender','PostalAddress','Major','Email'];
  dataSource = null;
  data_source_get_by_id = null;
  all_student_details = null;
  //private patientsSub: Subscription;
  apps=[{},{}]
  showTable=true;
  showForm=false;
  constructor(public apiService: ApiHttpService) { }

  ngOnInit(): void {
    this.getAllStaffDetails()
  }

  getAllStaffDetails(){
    this.apiService.getAllStaffDetails().subscribe(result => {
      console.log(result.recordset);
      this.dataSource = result.recordset;
    })
  }

  getStaffByID(id:any){
    this.apiService.getOneStaff(id).subscribe(result => {
      console.log(result.recordset);
      this.data_source_get_by_id = result.recordset;
    })
  }

}
