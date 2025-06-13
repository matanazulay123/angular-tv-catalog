import { Injectable, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { NEVER } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService{
 dseries: Product[] = [
  new Product('The Vampire Daries','assets/drama/MV5BMDk3YzgxNDQtNTEzOS00NDMyLWFlYmYtYTZlMDk1NDkxNmMyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_.jpg','2009'),
  new Product('Homeland','assets/drama/homeland.jpg','2011'),
  new Product('Invasion','assets/drama/invasion.jpg','2021'),
  new Product('Lucifer','assets/drama/lucifer_.jpg','2016'),
  new Product('Prison Break','assets/prison break.jpg','2005'),
 ]
 
cseries: Product[] = [
  new Product('DAHMER','assets/crime/DAHMER.jpg','2022'),
  new Product('Lupin','assets/crime/lupin.jpg','2021'),
  new Product('BlackList','assets/crime/blacklist.jpg','2013'),
  new Product('Breaking Bad','assets/Breaking bed.jpg','2008'),
  new Product('Peaky Blinders','assets/crime/peaky blinders.jpg','2013'),
 ]
coseries: Product[] = [ 
  new Product('Brooklyn 99','assets/comedy/brooklyn 9 9 .jpg','2013'),
  new Product('Friends','assets/friends.jpg','1994'),
  new Product('How I met your mother','assets/comedy/how i met your mother.jpg','2005'),
  new Product('Rick & Morty','assets/comedy/rick & morty.jpg','2013'),
  new Product('Shameless','assets/comedy/shameless.jpg','2011'),
 ]
iseries: Product[] = [ 
  new Product('Fauda','assets/israeli/Fauda.jpg','2015'),
  new Product('Asfur','assets/israeli/asfur_.jpg','2010'),
  new Product('Borer','assets/israeli/Borer.jpg','2007'),
  new Product('Tehran','assets/israeli/tehran.jpg','2020'),
  new Product('Zaguri','assets/israeli/Zaguri.jpg','2014'),
 ]
chseries: Product[] = [
   new Product('Kim Possible','assets/children/kim_possible.jpg','2002'),
  new Product('Arthur','assets/children/arthur.jpg','1996'),
  new Product('Phineas & Ferb','assets/children/phineas and ferb.jpg','2007'),
  new Product('Simpsons','assets/children/simpsons.jpg','1989'),
  new Product('Spoongbob','assets/children/spoongebob.jpg','1999'),
 ]

 top5products: Product[] = [
  new Product('Spoongebob','assets/children/spoongebob.jpg','2015'),
 new Product('Friends','assets/friends.jpg','1994'),
 new Product('Fauda','assets/israeli/Fauda.jpg','2015'),
 new Product('Breaking bad','assets/Breaking bed.jpg','2008'),
 new Product('Prison Break','assets/prison break.jpg','2005'),
]

 all:Product[]=[]

constructor(){}

 getProducts(category:string) {
   if(category=='dseries')
    return this.dseries
   else if(category=='cseries')
    return this.cseries
    else if(category=='coseries')
    return this.coseries
    else if(category=='iseries')
    return this.iseries
    else if(category=='chseries')
    return this.chseries
  else
    return this.all.concat(this.coseries,this.cseries,this.dseries, this.iseries,this.chseries)
 }

 getTopProducts(){
      return this.top5products
 }


 

}
