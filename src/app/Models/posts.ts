import { Categories } from "./categories";

export interface IPost {
    id              :number;
    user_id         :string ;
    picture         :string;
    title           :string;     
    description     :string;      
    price           :number;
    category_id     :Categories ;
    Modele          :string;  
    BoiteDeVitesse  :string;     
    AnneeModele     :number;      
    Marque          :number;
    YearOfRegistration:number ;
    TypePost        :string;   
    PuissanceFiscale:string;   
    PuissanceDIN    :string;   
    Kilometrage     :number;
    NombreDePortes  :number;
    NombreDePlaces  :number;
    carburant       :string;   
    Permis          :boolean;
    data: IPost[];
}
export class Post implements IPost {
    id              :number;
    user_id         :string ;
    picture         :string ;
    title           :string;     
    description     :string;      
    price           :number;
    category_id      :Categories ;
    Modele          :string;  
    BoiteDeVitesse  :string;     
    AnneeModele     :number;      
    Marque          :number;
    YearOfRegistration:number ;
    TypePost        :string;   
    PuissanceFiscale:string;   
    PuissanceDIN    :string;   
    Kilometrage     :number;
    NombreDePortes  :number;
    NombreDePlaces  :number;
    carburant       :string;   
    Permis          :boolean;
    data: IPost[] = [];

}
