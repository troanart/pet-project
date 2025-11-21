import { Injectable } from '@angular/core';
import { EventCard } from '../models/event-card.interface';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor() {}

  getEvents(): EventCard[] {
    return [
      {
        id: 1,
        date: 5,
        mounth: 'August',
        time: '11:00-14:00',
        title: 'Formation of the organizational structure of the company in the face of uncertainty.',
        text: 'Online master-class',
        category: 'Management'
      },
      {
        id: 2,
        date: 24,
        mounth: 'July',
        time: '11:00-12:00',
        title: 'Building a customer service department. Best Practices.',
        text: 'Online lecture',
        category: 'Management'
      },
      {
        id: 3,
        date: 16,
        mounth: 'July',
        time: '10:00-13:00',
        title: 'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
        text: 'Online workshop',
        category: 'Design'
      },
      {
        id: 4,
        date: 10,
        mounth: 'July',
        time: '9:00-14:00',
        title: 'Find and evaluate: search and assessment tools for candidates.',
        text: 'Online workshop',
        category: 'HR & Recruiting'
      },
      {
        id: 5,
        date: 27,
        mounth: 'June',
        time: '15:00-19:00',
        title: 'Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.',
        text: 'Online master class',
        category: 'Development'
      },
      {
        id: 6,
        date: 15,
        mounth: 'June',
        time: '10:00-12:00',
        title: 'Marketing or growth hacking: main differences and what business needs.',
        text: 'Online lecture',
        category: 'Marketing'
      },
      {
        id: 7,
        date: 2,
        mounth: 'June',
        time: '11:00-13:00',
        title: 'How to brief a client and present your design to approve it from the first show.',
        text: 'Online lecture',
        category: 'Design'
      },
      {
        id: 8,
        date: 29,
        mounth: 'May',
        time: '11:00-12:00',
        title: 'Who is a project manager and do I want to be PM?',
        text: 'Online lecture',
        category: 'Management'
      },
      {
        id: 9,
        date: 18,
        mounth: 'May',
        time: '10:00-12:00',
        title: 'The company\'s business page as an additional tool to support the announcement of vacancies.',
        text: 'Online lecture',
        category: 'HR & Recruiting'
      },
      {
        id: 10,
        date: 12,
        mounth: 'May',
        time: '14:00-16:00',
        title: 'Introduction to Agile and Scrum methodologies for modern teams.',
        text: 'Online workshop',
        category: 'Management'
      },
      {
        id: 11,
        date: 5,
        mounth: 'May',
        time: '10:00-11:30',
        title: 'Effective communication strategies in remote work environments.',
        text: 'Online lecture',
        category: 'Management'
      },
      {
        id: 12,
        date: 28,
        mounth: 'April',
        time: '13:00-17:00',
        title: 'Advanced JavaScript: ES6+ features and modern development practices.',
        text: 'Online master-class',
        category: 'Development'
      },
      {
        id: 13,
        date: 20,
        mounth: 'April',
        time: '11:00-13:00',
        title: 'UI/UX Design principles: creating user-centered interfaces.',
        text: 'Online workshop',
        category: 'Design'
      },
      {
        id: 14,
        date: 15,
        mounth: 'April',
        time: '9:00-10:30',
        title: 'Time management techniques for increased productivity.',
        text: 'Online lecture',
        category: 'Management'
      },
      {
        id: 15,
        date: 8,
        mounth: 'April',
        time: '15:00-18:00',
        title: 'Building RESTful APIs with Node.js and Express framework.',
        text: 'Online master-class',
        category: 'Development'
      },
      {
        id: 16,
        date: 1,
        mounth: 'April',
        time: '12:00-13:30',
        title: 'Introduction to data analytics and business intelligence tools.',
        text: 'Online lecture',
        category: 'Development'
      },
      {
        id: 17,
        date: 25,
        mounth: 'March',
        time: '10:00-14:00',
        title: 'Complete guide to React: hooks, context, and state management.',
        text: 'Online master-class',
        category: 'Development'
      },
      {
        id: 18,
        date: 18,
        mounth: 'March',
        time: '14:00-16:00',
        title: 'Digital marketing fundamentals: SEO, SEM, and social media strategies.',
        text: 'Online workshop',
        category: 'Marketing'
      },
      {
        id: 19,
        date: 10,
        mounth: 'March',
        time: '11:00-12:00',
        title: 'Leadership skills: how to motivate and inspire your team.',
        text: 'Online lecture',
        category: 'Management'
      },
      {
        id: 20,
        date: 3,
        mounth: 'March',
        time: '13:00-15:00',
        title: 'Python for data science: pandas, numpy, and data visualization.',
        text: 'Online workshop',
        category: 'Development'
      },
      {
        id: 21,
        date: 22,
        mounth: 'February',
        time: '10:00-12:00',
        title: 'Content creation and storytelling for brand development.',
        text: 'Online lecture',
        category: 'Marketing'
      },
      {
        id: 22,
        date: 14,
        mounth: 'February',
        time: '15:00-19:00',
        title: 'Full-stack development: building modern web applications from scratch.',
        text: 'Online master-class',
        category: 'Development'
      },
      {
        id: 23,
        date: 7,
        mounth: 'February',
        time: '11:00-13:00',
        title: 'Financial planning and budgeting for startups and small businesses.',
        text: 'Online workshop',
        category: 'Business'
      },
      {
        id: 24,
        date: 30,
        mounth: 'January',
        time: '10:00-11:30',
        title: 'Introduction to cloud computing: AWS, Azure, and Google Cloud basics.',
        text: 'Online lecture',
        category: 'Development'
      },
      {
        id: 25,
        date: 20,
        mounth: 'January',
        time: '14:00-17:00',
        title: 'Mobile app development: React Native and Flutter comparison.',
        text: 'Online master-class',
        category: 'Development'
      },
      {
        id: 26,
        date: 12,
        mounth: 'January',
        time: '9:00-10:30',
        title: 'Customer relationship management: CRM systems and best practices.',
        text: 'Online lecture',
        category: 'Business'
      },
      {
        id: 27,
        date: 5,
        mounth: 'January',
        time: '13:00-15:00',
        title: 'E-commerce strategies: building and scaling online stores.',
        text: 'Online workshop',
        category: 'Business'
      },
      {
        id: 28,
        date: 28,
        mounth: 'December',
        time: '11:00-12:30',
        title: 'Cybersecurity essentials: protecting your business from threats.',
        text: 'Online lecture',
        category: 'Development'
      },
      {
        id: 29,
        date: 15,
        mounth: 'December',
        time: '10:00-14:00',
        title: 'Advanced Angular: performance optimization and best practices.',
        text: 'Online master-class',
        category: 'Development'
      },
      {
        id: 30,
        date: 8,
        mounth: 'December',
        time: '15:00-17:00',
        title: 'Video production and editing for social media marketing.',
        text: 'Online workshop',
        category: 'Marketing'
      },
      {
        id: 31,
        date: 1,
        mounth: 'December',
        time: '12:00-13:00',
        title: 'Networking strategies: building professional relationships online.',
        text: 'Online lecture',
        category: 'Business'
      }
    ];
  }
}

