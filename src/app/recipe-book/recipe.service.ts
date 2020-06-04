import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
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

  getRecipes() {
    // return a new array - that is what slice() does
    return this.recipes.slice();
  }
}
