import { Injectable } from '@angular/core';
import { EventCard } from '../models/event-card.interface';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor() {}

  /**
   * Создает slug из заголовка события
   * Преобразует заголовок в нижний регистр и заменяет пробелы на дефисы
   * @param title - заголовок события
   * @returns slug для роутинга (например: "formation-of-the-organizational-structure")
   */
  private createSlugFromTitle(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Удаляем все символы кроме букв, цифр, пробелов и дефисов
      .replace(/\s+/g, '-') // Заменяем пробелы на дефисы
      .replace(/-+/g, '-') // Заменяем множественные дефисы на один
      .trim()
      .replace(/^-+|-+$/g, ''); // Убираем дефисы в начале и конце
  }

  /**
   * Создает Date объекты для начала и конца события
   * @param day - день месяца (1-31)
   * @param monthName - название месяца на английском (например "August")
   * @param timeRange - строка времени в формате "HH:mm-HH:mm" (например "11:00-14:00")
   * @param year - год (по умолчанию текущий)
   * @returns объект с date (начало) и endTime (конец)
   */
  private createEventDates(
    day: number,
    monthName: string,
    timeRange: string,
    year?: number
  ): { date: Date; endTime: Date } {
    const currentYear = year || new Date().getFullYear();

    // Маппинг названий месяцев на индексы (0-11)
    const monthMap: { [key: string]: number } = {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11,
    };

    const monthIndex = monthMap[monthName];
    if (monthIndex === undefined) {
      throw new Error(`Invalid month name: ${monthName}`);
    }

    // Парсим строку времени "11:00-14:00"
    const [startTime, endTime] = timeRange.split('-').map((t) => t.trim());
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);

    // Создаем Date для начала события
    const date = new Date(
      currentYear,
      monthIndex,
      day,
      startHours,
      startMinutes,
      0,
      0
    );

    // Создаем Date для конца события
    const endDate = new Date(
      currentYear,
      monthIndex,
      day,
      endHours,
      endMinutes,
      0,
      0
    );

    return { date, endTime: endDate };
  }

  getEvents(): EventCard[] {
    const currentYear = new Date().getFullYear();
    const previousYear = currentYear - 1;

    return [
      {
        id: 1,
        ...this.createEventDates(5, 'August', '11:00-14:00'),
        title:
          'Formation of the organizational structure of the company in the face of uncertainty.',
        text: 'Online master-class',
        category: 'Management',
        routerLink: this.createSlugFromTitle('Formation of the organizational structure of the company in the face of uncertainty.'),
      },
      {
        id: 2,
        ...this.createEventDates(24, 'July', '11:00-12:00'),
        title: 'Building a customer service department. Best Practices.',
        text: 'Online lecture',
        category: 'Management',
        routerLink: this.createSlugFromTitle('Building a customer service department. Best Practices.'),
      },
      {
        id: 3,
        ...this.createEventDates(16, 'July', '10:00-13:00'),
        title:
          'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
        text: 'Online workshop',
        category: 'Design',
        routerLink: this.createSlugFromTitle('How to apply methods of speculative design in practice. Worldbuilding prototyping.'),
      },
      {
        id: 4,
        ...this.createEventDates(10, 'July', '9:00-14:00'),
        title: 'Find and evaluate: search and assessment tools for candidates.',
        text: 'Online workshop',
        category: 'HR & Recruiting',
        routerLink: this.createSlugFromTitle('Find and evaluate: search and assessment tools for candidates.'),
      },
      {
        id: 5,
        ...this.createEventDates(27, 'June', '15:00-19:00'),
        title:
          'Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.',
        text: 'Online master class',
        category: 'Development',
        routerLink: this.createSlugFromTitle('Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.'),
      },
      {
        id: 6,
        ...this.createEventDates(15, 'June', '10:00-12:00'),
        title:
          'Marketing or growth hacking: main differences and what business needs.',
        text: 'Online lecture',
        category: 'Marketing',
        routerLink: this.createSlugFromTitle('Marketing or growth hacking: main differences and what business needs.'),
      },
      {
        id: 7,
        ...this.createEventDates(2, 'June', '11:00-13:00'),
        title:
          'How to brief a client and present your design to approve it from the first show.',
        text: 'Online lecture',
        category: 'Design',
        routerLink: this.createSlugFromTitle('How to brief a client and present your design to approve it from the first show.'),
      },
      {
        id: 8,
        ...this.createEventDates(29, 'May', '11:00-12:00'),
        title: 'Who is a project manager and do I want to be PM?',
        text: 'Online lecture',
        category: 'Management',
        routerLink: this.createSlugFromTitle('Who is a project manager and do I want to be PM?'),
      },
      {
        id: 9,
        ...this.createEventDates(18, 'May', '10:00-12:00'),
        title:
          "The company's business page as an additional tool to support the announcement of vacancies.",
        text: 'Online lecture',
        category: 'HR & Recruiting',
        routerLink: this.createSlugFromTitle("The company's business page as an additional tool to support the announcement of vacancies."),
      },
      {
        id: 10,
        ...this.createEventDates(12, 'May', '14:00-16:00'),
        title:
          'Introduction to Agile and Scrum methodologies for modern teams.',
        text: 'Online workshop',
        category: 'Management',
        routerLink: this.createSlugFromTitle('Introduction to Agile and Scrum methodologies for modern teams.'),
      },
      {
        id: 11,
        ...this.createEventDates(5, 'May', '10:00-11:30'),
        title:
          'Effective communication strategies in remote work environments.',
        text: 'Online lecture',
        category: 'Management',
        routerLink: this.createSlugFromTitle('Effective communication strategies in remote work environments.'),
      },
      {
        id: 12,
        ...this.createEventDates(28, 'April', '13:00-17:00'),
        title:
          'Advanced JavaScript: ES6+ features and modern development practices.',
        text: 'Online master-class',
        category: 'Development',
        routerLink: this.createSlugFromTitle('Advanced JavaScript: ES6+ features and modern development practices.'),
      },
      {
        id: 13,
        ...this.createEventDates(20, 'April', '11:00-13:00'),
        title: 'UI/UX Design principles: creating user-centered interfaces.',
        text: 'Online workshop',
        category: 'Design',
        routerLink: this.createSlugFromTitle('UI/UX Design principles: creating user-centered interfaces.'),
      },
      {
        id: 14,
        ...this.createEventDates(15, 'April', '9:00-10:30'),
        title: 'Time management techniques for increased productivity.',
        text: 'Online lecture',
        category: 'Management',
        routerLink: this.createSlugFromTitle('Time management techniques for increased productivity.'),
      },
      {
        id: 15,
        ...this.createEventDates(8, 'April', '15:00-18:00'),
        title: 'Building RESTful APIs with Node.js and Express framework.',
        text: 'Online master-class',
        category: 'Development',
        routerLink: this.createSlugFromTitle('Building RESTful APIs with Node.js and Express framework.'),
      },
      {
        id: 16,
        ...this.createEventDates(1, 'April', '12:00-13:30'),
        title:
          'Introduction to data analytics and business intelligence tools.',
        text: 'Online lecture',
        category: 'Development',
        routerLink: this.createSlugFromTitle('Introduction to data analytics and business intelligence tools.'),
      },
      {
        id: 17,
        ...this.createEventDates(25, 'March', '10:00-14:00'),
        title: 'Complete guide to React: hooks, context, and state management.',
        text: 'Online master-class',
        category: 'Development',
        routerLink: this.createSlugFromTitle('Complete guide to React: hooks, context, and state management.'),
      },
      {
        id: 18,
        ...this.createEventDates(18, 'March', '14:00-16:00'),
        title:
          'Digital marketing fundamentals: SEO, SEM, and social media strategies.',
        text: 'Online workshop',
        category: 'Marketing',
        routerLink: this.createSlugFromTitle('Digital marketing fundamentals: SEO, SEM, and social media strategies.'),
      },
      {
        id: 19,
        ...this.createEventDates(10, 'March', '11:00-12:00'),
        title: 'Leadership skills: how to motivate and inspire your team.',
        text: 'Online lecture',
        category: 'Management',
        routerLink: this.createSlugFromTitle('Leadership skills: how to motivate and inspire your team.'),
      },
      {
        id: 20,
        ...this.createEventDates(3, 'March', '13:00-15:00'),
        title:
          'Python for data science: pandas, numpy, and data visualization.',
        text: 'Online workshop',
        category: 'Development',
        routerLink: this.createSlugFromTitle('Python for data science: pandas, numpy, and data visualization.'),
      },
      {
        id: 21,
        ...this.createEventDates(22, 'February', '10:00-12:00'),
        title: 'Content creation and storytelling for brand development.',
        text: 'Online lecture',
        category: 'Marketing',
        routerLink: this.createSlugFromTitle('Content creation and storytelling for brand development.'),
      },
      {
        id: 22,
        ...this.createEventDates(14, 'February', '15:00-19:00'),
        title:
          'Full-stack development: building modern web applications from scratch.',
        text: 'Online master-class',
        category: 'Development',
        routerLink: this.createSlugFromTitle('Full-stack development: building modern web applications from scratch.'),
      },
      {
        id: 23,
        ...this.createEventDates(7, 'February', '11:00-13:00'),
        title:
          'Financial planning and budgeting for startups and small businesses.',
        text: 'Online workshop',
        category: 'Business',
        routerLink: this.createSlugFromTitle('Financial planning and budgeting for startups and small businesses.'),
      },
      {
        id: 24,
        ...this.createEventDates(30, 'January', '10:00-11:30'),
        title:
          'Introduction to cloud computing: AWS, Azure, and Google Cloud basics.',
        text: 'Online lecture',
        category: 'Development',
        routerLink: this.createSlugFromTitle('Introduction to cloud computing: AWS, Azure, and Google Cloud basics.'),
      },
      {
        id: 25,
        ...this.createEventDates(20, 'January', '14:00-17:00'),
        title: 'Mobile app development: React Native and Flutter comparison.',
        text: 'Online master-class',
        category: 'Development',
        routerLink: this.createSlugFromTitle('Mobile app development: React Native and Flutter comparison.'),
      },
      {
        id: 26,
        ...this.createEventDates(12, 'January', '9:00-10:30'),
        title:
          'Customer relationship management: CRM systems and best practices.',
        text: 'Online lecture',
        category: 'Business',
        routerLink: this.createSlugFromTitle('Customer relationship management: CRM systems and best practices.'),
      },
      {
        id: 27,
        ...this.createEventDates(5, 'January', '13:00-15:00'),
        title: 'E-commerce strategies: building and scaling online stores.',
        text: 'Online workshop',
        category: 'Business',
        routerLink: this.createSlugFromTitle('E-commerce strategies: building and scaling online stores.'),
      },
      {
        id: 28,
        ...this.createEventDates(28, 'December', '11:00-12:30', previousYear),
        title:
          'Cybersecurity essentials: protecting your business from threats.',
        text: 'Online lecture',
        category: 'Development',
        routerLink: this.createSlugFromTitle('Cybersecurity essentials: protecting your business from threats.'),
      },
      {
        id: 29,
        ...this.createEventDates(15, 'December', '10:00-14:00', previousYear),
        title: 'Advanced Angular: performance optimization and best practices.',
        text: 'Online master-class',
        category: 'Development',
        routerLink: this.createSlugFromTitle('Advanced Angular: performance optimization and best practices.'),
      },
      {
        id: 30,
        ...this.createEventDates(8, 'December', '15:00-17:00', previousYear),
        title: 'Video production and editing for social media marketing.',
        text: 'Online workshop',
        category: 'Marketing',
        routerLink: this.createSlugFromTitle('Video production and editing for social media marketing.'),
      },
      {
        id: 31,
        ...this.createEventDates(1, 'December', '12:00-13:00', previousYear),
        title:
          'Networking strategies: building professional relationships online.',
        text: 'Online lecture',
        category: 'Business',
        routerLink: this.createSlugFromTitle('Networking strategies: building professional relationships online.'),
      },
    ];
  }

  getEventsBySlug(slug: string): EventCard | undefined {
    return this.getEvents().find((event) => slug === event.routerLink);
  }
}

