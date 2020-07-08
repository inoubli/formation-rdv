export class Compte {
    constructor(public id:number,
        public login:string,public password:string,
        privilege:Privilege
        ) {
        
    }

}

export enum Privilege{
patient=0,
praticien=1,
admin=3
}

function isPatient(patient:Privilege):boolean{
    return patient==Privilege.patient;
}
function isPraticien(praticien:Privilege):boolean{
    return praticien==Privilege.praticien;
}
function isAdmin(admin:Privilege):boolean{
    return admin==Privilege.admin;
}

