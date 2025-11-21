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
        badgeColor: '#03CEA4',
        image: 'assets/courses/1.png',
        price: 100,
        author: 'Jerome Bell',
        routerLink: 'the-ultimate-google-ads-training-course',
      },
      {
        id: 2,
        title: 'Prduct Management Fundamentals',
        category: 'Management',
        badgeColor: '#5A87FC',
        image: 'assets/courses/2.png',
        price: 480,
        author: 'Marvin McKinney',
        routerLink: 'product-management-fundamentals',
      },
      {
        id: 3,
        title: 'HR Management and Analytics',
        category: 'HR & Recruting',
        badgeColor: '#F89828',
        image: 'assets/courses/3.png',
        price: 200,
        author: 'Leslie Alexander Li',
        routerLink: 'hr-management-and-analytics',
      },
      {
        id: 4,
        title: 'Brand Management & PR Communications',
        category: 'Marketing',
        badgeColor: '#03CEA4',
        image: 'assets/courses/4.png',
        price: 530,
        author: 'Kristin Watson',
        routerLink: 'brand-management-pr-communications',
      },
      {
        id: 5,
        title: 'Graphic Design Basic',
        category: 'Design',
        badgeColor: '#F52F6E',
        image: 'assets/courses/5.png',
        price: 500,
        author: 'Guy Hawkins',
        routerLink: 'graphic-design-basic',
      },
      {
        id: 6,
        title: 'Business Development Management',
        category: 'Management',
        badgeColor: '#5A87FC',
        image: 'assets/courses/6.png',
        price: 400,
        author: 'Dianne Russell',
        routerLink: 'business-development-management',
      },
      {
        id: 7,
        title: 'Highload Software Architecture',
        category: 'Development',
        badgeColor: '#7772F1',
        image: 'assets/courses/7.png',
        price: 600,
        author: 'Brooklyn Simmons',
        routerLink: 'highload-software-architecture',
      },
      {
        id: 8,
        title: 'Human Resources - Selection and Recruitment',
        category: 'HR & Recruting',
        badgeColor: '#F89828',
        image: 'assets/courses/8.png',
        price: 150,
        author: 'Kathryn Murphy',
        routerLink: 'human-resources-selection-and-recruitment',
      },
      {
        id: 9,
        title: 'User Experience. Human-centered Design',
        category: 'Design',
        badgeColor: '#F52F6E',
        image: 'assets/courses/9.png',
        price: 240,
        author: 'Cody Fisher',
        routerLink: 'user-experience-human-centered-design',
      },
    ];
  }

  getCourseBySlug(slug: string): CourseCard | undefined  {
  
    return this.getCourses().find((course) => slug === course.routerLink);;
  }
}
