import { Component, OnInit } from '@angular/core';
import { TagService } from '../../projectService/tag.service';
import { ToastrService } from 'ngx-toastr';
import { Tag } from '../../projectModel/tag';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CourService } from '../../projectService/cour.service';
import { Cour } from '../../projectModel/cour';

@Component({
  selector: 'app-gestiontag',
  templateUrl: './gestiontag.component.html',
  styleUrl: './gestiontag.component.css'
})
export class GestiontagComponent implements OnInit {

  modelTag :Tag = new Tag();
  listTag : Tag [] = [] ;
  viewmodelTag : Tag = new Tag();
  listcours : Cour [] = [] ;
  modelcour :Cour = new Cour();
  selectedValue: string = 'true';
  id_coure! : number



  constructor( private router:Router,
               private toastr: ToastrService ,
                private tagservice : TagService ,
                private courservice : CourService
              ){}
  
  
  
  ngOnInit(): void {
    this.getListTags();
    this.getLitscours();

  }



  savetag(): void {
     this.modelcour.id = this.id_coure;
    this.tagservice.saveTag(this.modelTag).subscribe({
        next: (response) => {
         this.toastr.success("matiere ajouter  😎")
         this.getListTags();
         console.log(response)
        },
        error: (error: HttpErrorResponse) => {
       this.toastr.error(" erreur!!!!! 😥")  
        }
      });
    }





  getListTags()
  {
    this.tagservice.findAllTags().subscribe(res => {
      this.listTag = res
      console.log(res)
     
    } , error => {
        console.error(error)
    } , ()=> {

    })
  }


  getbyid(id:number)
  {
    this.tagservice.findTagById(id).subscribe(res => {
      this.viewmodelTag = res
      console.log(res)
    } , error => {
        console.error(error)
    } , ()=> {

    })
  }


deletetag(id:number)
  {
    if(id!=undefined && id !=null)
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
          this.tagservice.deleteTagById(id)
          .subscribe(res=>{
            this.getListTags()
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



























}
