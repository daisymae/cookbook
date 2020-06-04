import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg',
      [
        new Ingredient('pizza crust', 1),
        new Ingredient('cheese', 2),
        new Ingredient('meat', 1),
        new Ingredient('mushrooms', 10),
        new Ingredient('onion', 1),
      ]
    ),
    new Recipe(
      'Another Recipe',
      'Yummy yum yum',
      'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg',
      [
        new Ingredient('chicken breast', 1),
        new Ingredient('cucumber', 1),
        new Ingredient('lettuce', 1),
      ]
    ),
  ];

  getRecipes() {
    // return a new array - that is what slice() does
    return this.recipes.slice();
  }
}
