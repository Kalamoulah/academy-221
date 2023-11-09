import { Component ,EventEmitter, OnInit, Output} from '@angular/core';

import * as XLSX from 'xlsx';

import { tap } from 'rxjs';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  @Output() dataInscription: EventEmitter<any> = new EventEmitter<any>();
  selectedFile!: File | null;
  excelData!: any[] | null
  classes!: any[] 
  classeSelect: number = 0;

  // constructor(private _rpService: RpService){}
  // ngOnInit(): void {
  //   this. allClass();


  // }

  classeSelected(event: Event) {
    const element = event.target as HTMLSelectElement
     this.classeSelect = +element.value 
  }


  convertExcelDateToDate(excelDateValue: number) {
    const epoch = new Date(1899, 11, 30).getTime();
    const jsDate = new Date(epoch + (excelDateValue - 1) * 24 * 60 * 60 * 1000); 
    return jsDate;
  }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    
   this.readExcelFile()
    
  }

  readExcelFile() {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName]);

      excelData.forEach((row: any) => {
        row.date_naissance = this.convertExcelDateToDate(row.date_naissance);
      });

      this.excelData = excelData;
      console.log(this.excelData);
    };
    reader.readAsArrayBuffer(this.selectedFile!);
  }

  allClass(){
      // this._rpService.getAllClasse().pipe(
      //   tap({
      //     next: (res) => {
      //       console.log(res);
      //       this.classes = res.data
      //       console.log(res.data);
            
      //     },
      //     complete: () => {
      //       console.log("obervable terminé");
      //     },
      //     error: (err) => {
      //       console.log(err);
      //     }
      //   }),
      // ).subscribe()
  }

  insciption() {
     const data = {
       classe_id: this.classeSelect,
       eleves :this.excelData 
     }
    //  this._rpService.inscription(data).pipe(
    //   tap({
    //     next: (res) => {
    //       console.log(res);          
    //     },
    //     complete: () => {
    //       console.log("obervable terminé");
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     }
    //   }),
    // ).subscribe()
           
  
    }
}
