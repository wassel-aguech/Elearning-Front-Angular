import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NiveauService } from '../../projectService/niveau.service';
import { Niveau } from '../../projectModel/niveau';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { MatiereService } from '../../projectService/matiere.service';
import { Matiere } from '../../projectModel/matiere';
import { Validators,FormArray,FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-gestionniveau',
  templateUrl: './gestionniveau.component.html',
  styleUrl: './gestionniveau.component.css'
})
export class GestionniveauComponent {

  modelniveau :Niveau = new Niveau();
  listviveau : Niveau [] = [] ;
  listmatiere : Matiere [] = [] ;
  viewmodelmatiere: Matiere = new Matiere();
  viewmodelniveau : Niveau = new Niveau();
  idmatiere! : number;
  nomMatiere! : string;
  i: number = 0;
   searchN! : number;
  

  matieree = new FormGroup({
   
     mat : new FormArray([]),
     matname :  new FormArray([])
  })

  constructor( private router:Router , private toastr: ToastrService , private niveauservice :NiveauService , private matierservice : MatiereService){}
  ngOnInit(): void {
    this.getListNiveaux();
    this.getListMatiere()
    
  }

  get mat(){
    return this.matieree.get('mat') as FormArray
  }
  get matname(){
    return this.matieree.get('matname') as FormArray
  }

  addmatid(){

    this.i= this.i + 1
    this.getbyidmatiere(this.idmatiere)
    console.log(this.idmatiere);
    console.log(this.listmatiere.length)
  }


  
  getbyidmatiere(id:number)
  {
    this.matierservice.findMatiereById(id).subscribe(res => {
      this.viewmodelmatiere = res

      if(this.i<=this.listmatiere.length){

        this.mat.push(new FormControl(this.idmatiere,Validators.required))
        this.matname.push(new FormControl(this.viewmodelmatiere.libelle,Validators.required))
  
        console.log(this.mat.value)
  
  
      }
      console.log(res)
    } , error => {
        console.error(error)
    } , ()=> {

    })
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






  saveniveau(): void {
    this.modelniveau.id_matieres = this.mat.value
    console.log(this.modelniveau)
    this.niveauservice.saveNiveau(this.modelniveau).subscribe({
        next: (response) => {
         this.toastr.success("niveau ajouter  😎")
         this.getListNiveaux();
        
        },
        error: (error: HttpErrorResponse) => {
       this.toastr.error(" erreur!!!!! 😥")
          
        }
      });
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
  
  
    getbyid(id:number)
    {
      this.niveauservice.findNiveauById(id).subscribe(res => {
        this.viewmodelniveau = res
        console.log(res)
      } , error => {
          console.error(error)
      } , ()=> {
  
      })
    }
  
  
  deleteNiveau(levelId:number)
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
            this.niveauservice.deleteNiveauById(levelId)
            .subscribe(res=>{
              this.getListNiveaux()
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
  