import { Component } from '@angular/core';
import { CheckList } from 'src/app/shared/models/check-list.interface';
import { CheckListComponent } from 'src/app/shared/components/check-list/check-list.component';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent {
  buttonText: string = 'More about us';
  buttonRouterLink: string = '/about-us';
  checkListItems: CheckList[] = [
    {
      text: 'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
    },
    {
      text: 'Vulputate placerat amet pulvinar lorem nisl.',
    },
    {
      text: 'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
    },
    {
      text: 'Etiam duis lobortis in fames ultrices commodo nibh.',
    },
    {
      text: 'Tincidunt sagittis neque sem ac eget.',
    },
    {
      text: 'Ultricies amet justo et eget quisque purus vulputate dapibus tortor.',
    },
  ];
}
