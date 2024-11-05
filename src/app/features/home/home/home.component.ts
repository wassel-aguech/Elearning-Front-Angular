import { Component, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  categories = [
    { name: 'Sciences', icon: 'https://cdn-icons-mp4.flaticon.com/512/11651/11651674.mp4', color: '#f4e1eb' },
    { name: 'Technologies', icon: 'https://cdn-icons-mp4.flaticon.com/512/11184/11184180.mp4', color: '#fbe9e7' },
    { name: 'Mathématiques', icon: 'https://cdn-icons-mp4.flaticon.com/512/11545/11545372.mp4', color: '#f1f8e9' }
    // Ajoutez d'autres catégories ici
  ];


  types =[ 
    { names: 'cours', icons: 'https://cdn-icons-mp4.flaticon.com/512/17110/17110431.mp4', color: '#f7e0d5 ' },
    { names: 'resumé', icons: 'https://cdn-icons-mp4.flaticon.com/512/15401/15401425.mp4', color: '#d2f1f7 ' },
    { names: 'session en ligne', icons: 'https://cdn-icons-mp4.flaticon.com/512/11781/11781841.mp4', color: '#d5b4b4 ' }];

  currentCategory = 0;
  backgroundColor = this.categories[this.currentCategory].color;


  currenttypes = 0;
  backgroundColor2 = this.types[this.currenttypes].color; 
  
  constructor(private router: Router) { }

  navigateToStudentSignup() {
    this.router.navigate(['/signup/student']);
  }

  navigateToTeacherSignup() {
    this.router.navigate(['/signup/teacher']);
  }


  ngAfterViewInit() {
    this.initScrollAnimations();
    this.initIntersectionObserver();
    this.updateCategory();
    this.updatetypes();
   
  }

  private initScrollAnimations() {
    this.handleScroll(); // Initial call to handle scroll effects
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  private handleScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(reveal => {
      const revealTop = (reveal as HTMLElement).getBoundingClientRect().top;

      if (revealTop < windowHeight - 150) {
        (reveal as HTMLElement).classList.add('active');
      } else {
        (reveal as HTMLElement).classList.remove('active');
      }
    });
  }

  private initIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('active');
        } else {
          (entry.target as HTMLElement).classList.remove('active');
        }
      });
    }, options);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(element => observer.observe(element));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.handleScroll(); // Update scroll effects on window resize
  }

  nextCategory() {
    this.currentCategory = (this.currentCategory + 1) % this.categories.length;
    this.updateCategory();
  }

  prevCategory() {
    this.currentCategory = (this.currentCategory - 1 + this.categories.length) % this.categories.length;
    this.updateCategory();
  }

  private updateCategory() {
    const categoriesContainer = document.querySelector('.categories-container') as HTMLElement;
    const scrollEffect = document.querySelector('.scroll-effect') as HTMLElement;

    if (categoriesContainer && scrollEffect) {
      categoriesContainer.style.transform = `translateX(-${this.currentCategory * 100}%)`;
      scrollEffect.style.backgroundColor = this.categories[this.currentCategory].color;
    }
  }

  navigateToChoix() {
    this.router.navigate(['/choix']);
  }

  navigateTologin() {
    this.router.navigate(['/login']);
  }


  nexttypes() {
    this.currenttypes = (this.currenttypes + 1) % this.types.length;
    this.updatetypes();
  }

  prevtypes() {
    this.currenttypes = (this.currenttypes- 1 + this.types.length) % this.types.length;
    this.updatetypes();
  }

  private updatetypes() {
    const typesContainer = document.querySelector('.types-container') as HTMLElement;
    const additionalsection  = document.querySelector('.additional-section ') as HTMLElement;

    if (typesContainer && additionalsection) {
      typesContainer.style.transform = `translateX(-${this.currenttypes * 100}%)`;
      additionalsection.style.backgroundColor = this.types[this.currenttypes].color;
    }
  }






}