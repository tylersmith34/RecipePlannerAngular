import {Injectable} from '@angular/core';

const RECIPES = [{
  Name: 'Steak'
  , Description: 'Juicy, juicy cow'
  , Tags: ['Meat', 'Beef']
},
  {
    Name: 'Pancakes'
    , Description: 'Buttermilk biscuits'
    , Tags: ['breakfast']
  }];

@Injectable()
export class RecipesService {
  recipes = RECIPES;

  constructor() {
  }
}
