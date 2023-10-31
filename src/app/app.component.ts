import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ServiceNotesService } from './service-notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'proj2';
  note: string =""; 
  filtre:string="";
  notes: string[] = [];
  couleurs: string[]= [];
  filtres: string[]= [];
  showNotes: boolean = false;
  buttonText = 'afficher';
 constructor(private notesService: ServiceNotesService){}
 shownote(){
  
  this.showNotes = !this.showNotes; 
  this.buttonText = this.showNotes ? 'Cacher' : 'afficher';
  this.notes = this.notesService.getNotes();
 }

 ajouternote(){
  this.notesService.addNote(this.note);
  this.couleurs.push(this.Randomcolor());
    this.note = '';
 }
 filtrer(){
  
    this.filtres=this.notes.filter(note => note.toLowerCase().includes(this.filtre.toLowerCase()));
    
  
 }
 /*addnote()
 {
  this.notes.push(this.note);
  this.couleurs.push(this.Randomcolor());
  this.note=''; 
}*/
 Randomcolor()

{
  const letters='0123456789ABCDEF';
  let color ='#';
  for(let i=0;i<6;i++)
  {
    color +=letters[Math.floor(Math.random()*16)];
  }
  return color;
}
deletethisnote(i:number)
{
  
  if (i >= 0 && i< this.notes.length) 
  {
    
    Swal.fire(
      {
      title: 'Delete this NOTE?',
      text: 'Are you sure you want to delete this note?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete note!',
      cancelButtonText: 'No, keep it',
      allowOutsideClick:false,
    }).then((result) => 
    {
      if (result.isConfirmed)
      {
        this.notes.splice(i, 1); 
        this.couleurs.splice(i, 1);
        Swal.fire('Deleted!', ' note have been deleted.', 'success');
        
      }
    });
  }
}

deleteall()
 {
  if (this.notes.length === 0) {
   
    Swal.fire('No Notes', 'There are no notes to delete.', 'info');}
    if (this.notes.length > 0) 
    { 
      Swal.fire(
        {
        title: 'Delete All Notes?',
        text: 'Are you sure you want to delete all notes?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete them!',
        cancelButtonText: 'No, keep them',
        allowOutsideClick:false,
      }).then((result) => 
      {
        if (result.isConfirmed)
        {
          this.notes = [];
          this.couleurs = [];
          Swal.fire('Deleted!', 'All notes have been deleted.', 'success');
        }
      });
    }
  }
}







