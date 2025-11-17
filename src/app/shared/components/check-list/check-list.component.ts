import { Component, Input } from '@angular/core';
import { CheckList } from '../../models/check-list.interface';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss'],
})
export class CheckListComponent {
  @Input() checkListItems: CheckList[] = [];
}
