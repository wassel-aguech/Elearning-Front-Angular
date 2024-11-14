import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SectionService } from '../../projectService/section.service';
import { Section } from '../../projectModel/section';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CourseService } from '../../core/services/course.service';
import { CourService } from '../../projectService/cour.service';
import { Cour } from '../../projectModel/cour';

@Component({
  selector: 'app-gestionsection',
  templateUrl: './gestionsection.component.html',
  styleUrl: './gestionsection.component.css'
})
export class GestionsectionComponent {



  modelSection :Section = new Section();
  listSection : Section [] = [] ;
  viewmodelSection : Section = new Section();
  listcours: Cour[] = [];
  id_cour! : number;



  constructor( private router:Router,
               private toastr: ToastrService ,
                private sectionservice : SectionService ,
                private courservice : CourService
              ){}
  
  
  
  ngOnInit(): void {
    this.getListTags();
    this.getLitscours();

  }



  savetag(): void {
     this.modelSection.idcours = Number(this.id_cour); 
     console.log(this.modelSection)
    this.sectionservice.saveSection(this.modelSection).subscribe({
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
    this.sectionservice.findAllSections().subscribe(res => {
      this.listSection = res
      console.log(res)
     
    } , error => {
        console.error(error)
    } , ()=> {

    })
  }


  getbyid(id:number)
  {
    this.sectionservice.findSectionById(id).subscribe(res => {
      this.viewmodelSection = res
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
          this.sectionservice.deleteSectionById(id)
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
