import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss']
})
export class ButtonComponentComponent {
  @Input() routerLink: string = '';
  @Input() text: string = '';
  @Input() variant: 'primary' | 'outline' = 'primary';
}
