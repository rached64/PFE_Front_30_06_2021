export interface IuserPro {
    id           :number;
    nom         :string ;
    email        :string;     
    password    :string ;
   // photo      : string ;
    telephone : number ;
    SIERT : number ;
    NomSociete : string ;
    catActivite: string ;
    Adresse: string ;
    codePostal: number ;
}
export class userPro implements IuserPro {
    id           :number;
    nom         :string ;
    email        :string;     
    password    :string ;
   // photo      : string ;
    telephone : number ;
    SIERT : number ;
    NomSociete : string ;
    catActivite: string ;
    Adresse: string ;
    codePostal: number ;

}
