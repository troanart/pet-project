export interface EventCard {
  id: number;
  date: Date;
  endTime: Date; 
  title: string;
  text: string;
  category: string;
  routerLink: string; // Slug для роутинга (например: "formation-of-the-organizational-structure")
}