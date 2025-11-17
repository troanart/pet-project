import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckListComponent } from './components/check-list/check-list.component';
import { ButtonComponentComponent } from './components/button-component/button-component.component';



@NgModule({
  declarations: [CheckListComponent, ButtonComponentComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CheckListComponent, ButtonComponentComponent]
})
export class SharedModule { }
