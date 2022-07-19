import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('bundle of parsley', 1),
    new Ingredient('lb of chicken', 1),
    new Ingredient('oz of parmesean', 4),
    new Ingredient('container of breading', 1),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
