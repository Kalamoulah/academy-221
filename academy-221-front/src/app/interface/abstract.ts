export interface Abstract {
    id?:number
    libelle:string
}

export interface dataResponse {
    message: string,
    data:  any[],
    success: boolean
}

export interface ModuleInterface extends Abstract {
   
}
export interface SharedInterface extends Abstract{
  
}
export interface filiere extends Abstract{
   
}

export interface ClasseInterface extends Abstract {
   libelle:string,
   filiere: filiere
}

export interface AnneePostInterface extends Abstract {
    semestres: SharedInterface[],
    classes:ClasseInterface[]
}

export interface AnneeScolaireInterface extends Abstract {
    en_cours: number
}


