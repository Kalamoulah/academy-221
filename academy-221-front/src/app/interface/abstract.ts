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

export interface Cours {
    cours_id: number
    heure_global: string
    color: string
    classe_concerne: string[]
    heure_ecoule: string
    id: number
    libelle: string
    professeur: Professeur
    module: SharedInterface
  }
  
  export interface Professeur {
    id: number
    name: string
  }


