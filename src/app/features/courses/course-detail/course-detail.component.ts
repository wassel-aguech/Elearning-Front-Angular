import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements AfterViewInit {
  courseTitle: string = 'Course Title';
  description: string = 'Description of the course.';
  price: number = 100;

  images = [
    'https://i.pinimg.com/564x/23/8e/b3/238eb30e255d94fc0d2c5031d4e999f2.jpg',
    'https://i.pinimg.com/564x/da/55/b8/da55b8e51275169e8c52a3e6900115a4.jpg',
    'https://i.pinimg.com/736x/5a/d4/ee/5ad4ee54a8da7030a0d66f334a734319.jpg',
    'https://i.pinimg.com/736x/f4/87/33/f48733301b2ddfeaa2e20cb8a88d000e.jpg',
    'https://i.pinimg.com/474x/67/dd/93/67dd935842539670fa9944de6ffa5cfb.jpg',
    'https://i.pinimg.com/736x/e6/a0/8c/e6a08ccb45b760797d99310012b68684.jpg',
    'https://i.pinimg.com/564x/3e/24/3d/3e243d953ab74660caf87fcf28ba59f1.jpg',
    'https://i.pinimg.com/564x/b2/7c/50/b27c5089fc145e18fdf9b08cd23fadc3.jpg',
  ];

  currentImageIndex = 0;
  isFullscreen = false;

  @ViewChild('thumbnailsContainer') thumbnailsContainer!: ElementRef;
  router: any;

  ngAfterViewInit() {}

  get currentImage() {
    return this.images[this.currentImageIndex];
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.scrollToImage();
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.scrollToImage();
  }

  scrollToImage() {
    const thumbnail = this.thumbnailsContainer.nativeElement.children[this.currentImageIndex] as HTMLElement;
    thumbnail.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  openFullscreen(index: number) {
    this.currentImageIndex = index;
    this.isFullscreen = true;
  }

  closeFullscreen() {
    this.isFullscreen = false;
  }

  newReview = {
    rating: 0,
    title: '',
    body: ''
  };

  onRatingChange(value: number) {
    this.newReview.rating = value;
  }

  submitReview() {
    console.log(this.newReview);
    this.newReview = { rating: 0, title: '', body: '' };
  }



  
}