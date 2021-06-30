export interface Iannonce {
    id: number;
    title : string;
    description : string;
    price : number;
    category: string;
    Modele: string;
    Marque: string;
    BoiteDeVitesse: string;
    AnneeModele: number;
    PuissanceFiscale: number;
    Kilometrage: number;
    NombreDePortes: number;
    NombreDePlaces: number;
    carburant: string;
    TypePost: string;
    image:string ;
}
export class annonce implements Iannonce {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    Modele: string;
    Marque: string;
    BoiteDeVitesse: string;
    AnneeModele: number;
    PuissanceFiscale: number;
    Kilometrage: number;
    NombreDePortes: number;
    NombreDePlaces: number;
    carburant: string;
    TypePost: string;
    image:string ;



}