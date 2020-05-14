import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 employeeInfo : any[] = [ {
     "employeeId" : 1001,
     "employeeName" : 'Khaja',
     "projectId" : 1701,
     "projectName" : 'Mantiz'
   },
   {
     "employeeId" : 1002,
     "employeeName" : 'Moiz',
     "projectId" : 1702,
     "projectName" : 'AILabz'
   }]
}
