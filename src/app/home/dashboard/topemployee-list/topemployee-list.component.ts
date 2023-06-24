import { Component ,Input} from '@angular/core';
import { employee } from 'src/app/shared/staticArrayClass/sataticArrayClass';

@Component({
  selector: 'app-topemployee-list',
  templateUrl: './topemployee-list.component.html',
  styleUrls: ['./topemployee-list.component.scss']
})
export class TopemployeeListComponent {
  @Input() empArrayList: employee[]=[];
  displayedColumnsName = [
    'name',
    'department',
    'salary',
    'task',
    'taskStatus',
    'manager',
  ];
}
