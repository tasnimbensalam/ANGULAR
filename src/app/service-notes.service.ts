import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceNotesService {

  constructor() { }
  notes:string[]=[];
  hidden: boolean = false;
  addNote(note:string){
    this.notes.push(note);
  }
  getNotes(){
    return JSON.parse(JSON.stringify(this.notes));
  }
  
 
  
}
