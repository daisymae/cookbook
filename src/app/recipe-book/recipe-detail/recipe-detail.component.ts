import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  // @Input so can be set from outside
  @Input() recipe: Recipe;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddIngredientsToShoppingList() {
    this.slService.addIngredients(this.recipe.ingredients);
  }
}
