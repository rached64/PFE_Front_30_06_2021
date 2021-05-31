export interface ICitie {
    id              :number;
    name         :string ;
    state_id   :string;     
    data:        ICitie[];
 
}
export class Citie implements ICitie {
    id              :number;
    name         :string ;
    state_id   :string;     
    data: ICitie[]= [];
}