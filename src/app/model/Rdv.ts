export class Rdv {
  constructor(public id: number, public idPatient?: number, public idPraticien?: number, public motif?: string,
              public dateRdv?: Date, public confirmer?: boolean) {
  }

}
