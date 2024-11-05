import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paniercours',
  templateUrl: './paniercours.component.html',
  styleUrl: './paniercours.component.css'
})
export class PaniercoursComponent implements OnInit {
  cartItems = [
    // Exemple de données, à remplacer par vos données réelles
    { id: 1, name: 'Cours Angular', price: 50, quantity: 1 },
    { id: 2, name: 'Cours PHP', price: 30, quantity: 2 }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get total() {
    return this.cartItems.reduce((sum, item) => sum + item.price ,0);
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  increaseQuantity(item: any) {
    item.quantity += 1;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  checkout() {
    // Logique pour passer à la caisse
    alert('Passer à la caisse');
  }

  navigateToPayement() {
    this.router.navigate(['/payment']);
  }

}
