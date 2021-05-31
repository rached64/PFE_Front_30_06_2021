export interface ICategories {
    id: number ;
    name:string ; 
    picture:string ; 
    slug:string ;
    description:string ; 
    data: ICategories[];
}
export class Categories implements ICategories {
    id: number ;
    name:string ; 
    picture:string ; 
    slug:string ;
    description:string ; 
    data: ICategories[] = [];

}