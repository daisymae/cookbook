import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.igChangeSub = this.shoppingService.ingredientsChanged.subscribe(
      (changedIngredients: Ingredient[]) =>
        (this.ingredients = changedIngredients)
    );
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.shoppingService.addIngredient(ingredient);
  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }
}
