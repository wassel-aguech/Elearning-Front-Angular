import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  animations: [
    trigger('courseAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.3s ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class CourseListComponent implements OnInit {
  categories = ['Développement Web', 'Data Science', 'Marketing', 'Design'];
  subjects = ['HTML/CSS', 'JavaScript', 'Python', 'Photoshop'];
  selectedCategory: string = '';
  selectedSubject: string = '';
  minPrice: number = 0;
  maxPrice: number = 100;

  courses = [
    { title: 'Cours 1', description: 'Description du cours 1', price: 50, imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Développement Web', subject: 'HTML/CSS' },
    { title: 'Cours 2', description: 'Description du cours 2', price: 75, imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Data Science', subject: 'Python' },
    // ... plus de cours
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  filteredCourses() {
    return this.courses.filter(course => 
      (!this.selectedCategory || course.category === this.selectedCategory) &&
      (!this.selectedSubject || course.subject === this.selectedSubject) &&
      course.price <= this.maxPrice
    );
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}

