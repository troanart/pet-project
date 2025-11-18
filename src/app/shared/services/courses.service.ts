import { Injectable } from '@angular/core';
import { CourseCard } from '../models/course-card.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(): CourseCard[]  {
    return [
      {
        id: 1,
        title: 'The Ultimate Google Ads Training Course',
        category: 'Marketing',
        image: 'assets/courses/1.png',
        price: 100,
        author: 'Jerome Bell',
        routerLink: '/courses/the-ultimate-google-ads-training-course',
      },
      {
        id: 2,
        title: 'Prduct Management Fundamentals',
        category: 'Management',
        image: 'assets/courses/2.png',
        price: 480,
        author: 'Marvin McKinney',
        routerLink: '/courses/product-management-fundamentals',
      },
      {
        id: 3,
        title: 'HR Management and Analytics',
        category: 'HR & Recruting',
        image: 'assets/courses/3.png',
        price: 200,
        author: 'Leslie Alexander Li',
        routerLink: '/courses/hr-management-and-analytics',
      },
      {
        id: 4,
        title: 'Brand Management & PR Communications',
        category: 'Marketing',
        image: 'assets/courses/4.png',
        price: 530,
        author: 'Kristin Watson',
        routerLink: '/courses/brand-management-pr-communications',
      },
      {
        id: 5,
        title: 'Graphic Design Basic',
        category: 'Design',
        image: 'assets/courses/5.png',
        price: 500,
        author: 'Guy Hawkins',
        routerLink: '/courses/graphic-design-basic',
      },
      {
        id: 6,
        title: 'Business Development Management',
        category: 'Management',
        image: 'assets/courses/6.png',
        price: 400,
        author: 'Dianne Russell',
        routerLink: '/courses/business-development-management',
      },
      {
        id: 7,
        title: 'Highload Software Architecture',
        category: 'Development',
        image: 'assets/courses/7.png',
        price: 600,
        author: 'Brooklyn Simmons',
        routerLink: '/courses/highload-software-architecture',
      },
      {
        id: 8,
        title: 'Human Resources - Selection and Recruitment',
        category: 'HR & Recruting',
        image: 'assets/courses/8.png',
        price: 150,
        author: 'Kathryn Murphy',
        routerLink: '/courses/human-resources-selection-and-recruitment',
      },
      {
        id: 9,
        title: 'User Experience. Human-centered Design',
        category: 'Design',
        image: 'assets/courses/9.png',
        price: 240,
        author: 'Cody Fisher',
        routerLink: '/courses/user-experience-human-centered-design',
      },
    ];
  }
}
