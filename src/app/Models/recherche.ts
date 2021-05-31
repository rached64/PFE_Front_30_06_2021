export interface ICountrie {
    id              :number;
    name         :string ;
    post_id        :string;  
    data: ICountrie[];
}
export class Countrie implements ICountrie {
    id              :number;
    name         :string ;
    post_id        :string; 
    data: ICountrie[] = [];
}
