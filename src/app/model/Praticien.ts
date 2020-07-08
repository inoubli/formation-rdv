import { Rdv } from './Rdv';

export class Praticien{
constructor(public id?:number,public nom?:string,
    public   prenom?:string,public courriel?:String,
    public idCompte?:string,
   public rdvs?:Array<Rdv>,public lieuDeConsultation?:Array<String>,
   public specialites?:Array<String>){

}

}