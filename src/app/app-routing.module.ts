import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Recipe } from './recipes/recipe.model';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [],
  },
  { path: 'shopping', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
