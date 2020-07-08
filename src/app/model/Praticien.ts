import { Rdv } from './Rdv';

export class Praticien {
  constructor(public id?: number, public nom?: string, public prenom?: string, public courriel?: string,
              public idCompte?: string,
              public rdvs?: Array<Rdv>, public lieuDeConsultation?: Array<string>,
              public specialites?: Array<string>) {}

}
