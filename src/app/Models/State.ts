export interface IState {
    id              :number;
    name         :string ;
    countries_id   :string;     
    data:        IState[];
 
}
export class State implements IState {
    id              :number;
    name         :string ;
    countries_id   :string;     
    data: IState[]= [];
}