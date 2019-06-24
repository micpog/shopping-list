import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shopping-list/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  onRecipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test recipe', 'Test recipe description', 'https://images.food52.com/PqbGKb6U130v9c9aE0OtkYbI4NE=/1200x675/49bbce59-a7ec-4c53-ab05-104d3ea6195f--spagetti-med-kottfarssas.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('Pasta', 1)
    ]),
    new Recipe('Test recipe 2', 'Test recipe description', 'https://images.food52.com/PqbGKb6U130v9c9aE0OtkYbI4NE=/1200x675/49bbce59-a7ec-4c53-ab05-104d3ea6195f--spagetti-med-kottfarssas.jpg', [
      new Ingredient('Tomato sauce', 1),
      new Ingredient('Parmezan cheese', 1)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  toShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
