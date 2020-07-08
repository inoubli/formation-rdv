import { Rdv } from './Rdv';

export class Patient {
    constructor(public id: number,public nom:string,
        public prenom:string,public courriel:string,
        public idCompte:string,
        public rdvs: Array<Rdv>) {
        
    }
}