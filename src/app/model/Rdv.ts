export class Rdv {
  constructor(public id: number, public idPatient?: number, public idParticien?: number, public motif?: string, public dateRdv?: Date,
              public confirmer?: boolean) {
  }

}
