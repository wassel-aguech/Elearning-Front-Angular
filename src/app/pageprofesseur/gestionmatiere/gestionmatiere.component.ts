import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatiereService } from '../../projectService/matiere.service';
import { Matiere } from '../../projectModel/matiere';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { bootstrapAppScopedEarlyEventContract } from '@angular/core/primitives/event-dispatch';


@Component({
  selector: 'app-gestionmatiere',
  templateUrl: './gestionmatiere.component.html',
  styleUrl: './gestionmatiere.component.css'
})
export class GestionmatiereComponent implements OnInit {
  modelmatiere :Matiere = new Matiere();
  listmatiere : Matiere [] = [] ;
  viewmodelmatiere : Matiere = new Matiere();


  constructor( private router:Router , private toastr: ToastrService , private matierservice :MatiereService){}
  ngOnInit(): void {
    this.getListMatiere();
    
  }

  savematiere(): void {
    const id = Number(localStorage.getItem("userId"));
    this.modelmatiere.idensegnant = id;
    this.matierservice.saveMatiere(this.modelmatiere).subscribe({
        next: (response) => {
         this.toastr.success("matiere ajouter  😎")
         this.getListMatiere();
        },
        error: (error: HttpErrorResponse) => {
       this.toastr.error(" erreur!!!!! 😥")  
        }
      });
    }
  
  
     
    getListMatiere()
    {
      this.matierservice.findAllMatieres().subscribe(res => {
        this.listmatiere = res
        console.log(res)
       
      } , error => {
          console.error(error)
      } , ()=> {
  
      })
    }
  
  
    getbyid(id:number)
    {
      this.matierservice.findMatiereById(id).subscribe(res => {
        this.viewmodelmatiere = res
        console.log(res)
      } , error => {
          console.error(error)
      } , ()=> {
  
      })
    }
  
  
  deleteMatiere(levelId:number)
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
            this.matierservice.deleteMatiereById(levelId)
            .subscribe(res=>{
              this.getListMatiere()
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
  
  
  
  
  
  }
  