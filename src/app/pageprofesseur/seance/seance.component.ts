import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Seance } from '../../projectModel/seance';
import { Section } from '../../projectModel/section';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SeanceService } from '../../projectService/seance.service';
import { SectionService } from '../../projectService/section.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrl: './seance.component.css'
})
export class SeanceComponent {


  modelSeance :Seance = new Seance();
  listSeance : Seance [] = [] ;
  viewmodelSeance : Seance = new Seance();
  listsection: Section[] = [];
  id_section! : number;



  constructor( private router:Router,
               private toastr: ToastrService ,
                private Seanceservice : SeanceService ,
                private sectionservice : SectionService
              ){}
  
  
  
  ngOnInit(): void {
    this.getListseance();
    this.getLitsection()
    

  }



  savetag(): void {
    this.modelSeance.idsection = Number(this.id_section); 
     console.log(this.id_section)


     this.Seanceservice.saveSeance(this.modelSeance).subscribe({
      
        next: (response) => {

         this.toastr.success("matiere ajouter  😎")
         this.getLitsection();
         console.log(response)
        },
        error: (error: HttpErrorResponse) => {
       this.toastr.error(" erreur!!!!! 😥")  
        }
      });
    }





    getListseance()
  {
    this.Seanceservice.findAllSeances().subscribe(res => {
      this.listSeance = res
      console.log(res)
     
    } , error => {
        console.error(error)
    } , ()=> {

    })
  }


  getbyid(id:number)
  {
    this.Seanceservice.findSeanceById(id).subscribe(res => {
      this.viewmodelSeance = res
      console.log(res)
    } , (error: any) => {
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
          this.Seanceservice.deleteSeanceById(id)
          .subscribe(res=>{
            this.getLitsection()
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




  getLitsection()
    {
      this.sectionservice.findAllSections().subscribe(res => {
        this.listsection = res
        console.log(res)
       
      } , error => {
          console.error(error)
      } , ()=> {
  
      })
    }
}