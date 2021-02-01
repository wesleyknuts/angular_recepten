export class Recept {
  public naam:string;
  public bereidingstijd: number;
  public ingredienten: Ingredient[] = [];
  constructor(){

  }
}

export class Ingredient{
  public naam:string;
  public hoev:number;
  constructor(){

  }
}
