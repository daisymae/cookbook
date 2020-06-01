import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelection = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg'
    ),
    new Recipe(
      'Another Recipe',
      'Yummy yum yum',
      'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelection.emit(recipe);
  }
}
