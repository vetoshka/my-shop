export class ProductModel {
  constructor(
   public id: number = 0,
   public name: string= '',
   public description: string='',
   public price: number=0,
   public category: string='',
   public isAvailable: boolean=false,
  ) { }
}