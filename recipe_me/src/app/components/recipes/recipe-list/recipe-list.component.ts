import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Chicken Parm', 'A delicious chicken parm', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Chicken_parm_at_a_diner.jpg/1024px-Chicken_parm_at_a_diner.jpg'),
    new Recipe('Chicken Parm', 'A delicious chicken parm', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Chicken_parm_at_a_diner.jpg/1024px-Chicken_parm_at_a_diner.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(selectedRecipe: HTMLInputElement){

  }

}
