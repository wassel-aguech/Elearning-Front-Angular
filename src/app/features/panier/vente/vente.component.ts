import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrl: './vente.component.css'
})
export class VenteComponent implements OnInit {
  sales = [
    {
      date: '2024-08-10',
      lastName: 'Dupont',
      firstName: 'Jean',
      courses: ['Introduction à PHP', 'Avancé en JavaScript'],
      categories: ['Programmation', 'Programmation'],
      subjects: ['PHP, SQL', 'JavaScript, HTML'],
      unitPrices: ['50', '70'],
      totalSales: ['50', '70'],
      totalAmount: '120'
    },
    

    

    // Ajouter d'autres ventes ici
  ];

  constructor() { }

  ngOnInit(): void {
    // Logic to fetch and populate sales data if needed
  }

  formatList(items: string[]): string {
    return items.join('<br>'); // Utilisez <br> pour ajouter des sauts de ligne dans HTML
  }

}