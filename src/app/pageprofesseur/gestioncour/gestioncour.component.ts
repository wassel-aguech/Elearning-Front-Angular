import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CourService } from '../../projectService/cour.service';
import Swal from 'sweetalert2';
import { Cour } from '../../projectModel/cour';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatiereService } from '../../projectService/matiere.service';
import { Matiere } from '../../projectModel/matiere';
import { NiveauService } from '../../projectService/niveau.service';
import { Niveau } from '../../projectModel/niveau';

@Component({
  selector: 'app-gestioncour',
  templateUrl: './gestioncour.component.html',
  styleUrl: './gestioncour.component.css'
})
export class GestioncourComponent implements OnInit {
  modelcour :Cour = new Cour();
  listcours : Cour [] = [] ;
  viewmodelcour : Cour = new Cour();
  lisMatiereByEns : Matiere [] = [] ;
  
  listviveau : Niveau [] = [] ;



  constructor( private router:Router , private toastr: ToastrService , private courservice :CourService, private matiereservice :MatiereService , private niveauservice :NiveauService){}


  ngOnInit(): void {

    this.getLitscours();
    this.getLitMatiereByIdEns();
    this.getListNiveaux();
  }



  savecours(): void {

    this.courservice.saveCour(this.modelcour).subscribe({
        next: (response) => {
         this.toastr.success("matiere ajouter  😎")
         this.getLitscours();
        
        },
        error: (error: HttpErrorResponse) => {
       this.toastr.error(" erreur!!!!! 😥")
          
        }
               
      });
    }
  
  
    
    getLitscours()
    {
      this.courservice.findAllCours().subscribe(res => {
        this.listcours = res
        console.log(res)
       
      } , error => {
          console.error(error)
      } , ()=> {
  
      })
    }
  
  
    getbyid(id:number)
    {
      this.courservice.findCourById(id).subscribe(res => {
        this.viewmodelcour = res
        console.log(res)
      } , error => {
          console.error(error)
      } , ()=> {
  
      })
    }
  
  
  deletcours(levelId:number)
    {
      if(levelId!=undefined && levelId !=null)
      {
        Swal.fire({
          title: 'Êtes-vous sûr?',
          text: 'Vous ne pourrez pas récupérer entite Matiere!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, supprimez-la!',
          cancelButtonText: 'Non, gardez-la'
        }).then((result : any) => {
          if (result.value) {
           // alert(id);
            this.courservice.deleteCourById(levelId)
            .subscribe(res=>{
              this.getLitscours()
            })
          Swal.fire(
            'Supprimé!',
            'Votre matiere entite a été supprimée.',
            'success'
          )
       
          } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Annulé',
            'Votre niveau est en sécurité 🙂',
            'error'
          )
          }
        })
      }
    }
  


    
     
    getLitMatiereByIdEns()
    {
      const id = Number(localStorage.getItem("userId"));
      this.matiereservice.findMatiereByIdEns(id).subscribe(res => {
      
        this.lisMatiereByEns = res
        console.log(res)
       
      } , error => {
          console.error(error)
      } , ()=> {
  
      })
    }
  


    getListNiveaux()
    {
      this.niveauservice.findAllNiveaus().subscribe(res => {
        this.listviveau = res
        console.log(res)
       
      } , error => {
          console.error(error)
      } , ()=> {
  
      })
    }






}
