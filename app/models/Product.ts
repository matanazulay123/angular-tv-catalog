export class Product{
  private title: string;
  private year:string;
  private picture:string;

    constructor(title:string,picture:string,year:string){
        this.title=title
        this.picture=picture
        this.year=year
        
    }


    getTitle(){
        return this.title
    }
    
    getYear(){
        return this.year
    }
    
    getPicture(){
        return this.picture
    }

    toString(){
        return "title="+this.title+"year="+this.year+"picture="+this.picture
    }
    
}
