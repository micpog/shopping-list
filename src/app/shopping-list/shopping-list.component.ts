import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) {
      this.shoppingListService.onIngredientAdded.subscribe(ingredients => {
        this.ingredients = ingredients;
      })
   }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }
}
