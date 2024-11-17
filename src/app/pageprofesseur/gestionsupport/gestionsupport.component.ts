import { Component } from '@angular/core';
import { Support } from '../../projectModel/support';
import { Seance } from '../../projectModel/seance';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SupportService } from '../../projectService/support.service';
import { SeanceService } from '../../projectService/seance.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { error } from 'console';

@Component({
  selector: 'app-gestionsupport',
  templateUrl: './gestionsupport.component.html',
  styleUrl: './gestionsupport.component.css'
})
export class GestionsupportComponent {

  modelSupport :Support = new Support();
  listSupport : Support [] = [] ;
  viewmodelSupport : Support = new Support();
  listseance: Seance[] = [];
  id_seance! : number;

  fileUrl: string | ArrayBuffer = 'assets/images/img.jpg'
  file!: File;
  submitted!: boolean;




  constructor( private router:Router,
               private toastr: ToastrService ,
                private supportservice : SupportService ,
                private seanceservice : SeanceService
              ){}
  
  
  
  ngOnInit(): void {
    this.getListsupport();
    this.getLitseance()
  }


  

    savesupport(): void {
      console.log("ali", this.file)
      this.modelSupport.idseance = Number(this.id_seance); 
      console.log(this.id_seance)

      this.supportservice.saveSupport(this.modelSupport).subscribe({
        next: (response) => {

         this.supportservice.uploadsupportFile(response.id, this.file).subscribe(
          val =>  {} , error => { alert('oups')} , () => {
            this.submitted = true ;
            console.log('akka mouna',this.file)
          alert("produit a été ajouté!")

         this.toastr.success("matiere ajouter  😎")
         this.getListsupport();
          });
        },
        error: (error: HttpErrorResponse) => {
       this.toastr.error(" erreur!!!!! 😥") 
        }       
      });
    }
  










    getListsupport()
  {
    this.supportservice.findAllSupports().subscribe(res => {
      this.listSupport = res
      console.log(res)
     
    } , error => {
        console.error(error)
    } , ()=> {

    })
  }


  getbyid(id:number)
  {
    this.supportservice.findSupportById(id).subscribe(res => {
      this.viewmodelSupport = res
      console.log(res)
    } , (error: any) => {
        console.error(error)
    } , ()=> {

    })
  }


deletesupport(id:number)
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
          this.supportservice.deleteSupportById(id)
          .subscribe(res=>{
            this.getListsupport()
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

  getLitseance()
    {
      this.seanceservice.findAllSeances().subscribe(res => {
        this.listseance = res
        console.log(res)
       
      } , error => {
          console.error(error)
      } , ()=> {
  
      })
    }



    onFileInput(files: FileList | null): void {
      // alert("1" + JSON.stringify(files))
      if (files) {
        //  alert("2" + JSON.stringify(files))
        this.file = files.item(0) as File;
        if (this.file) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(this.file);
          fileReader.onload = (event) => {
            if (fileReader.result) {
              this.fileUrl = fileReader.result;
            }
          };
        }
      }
    }
   
    changeSource(event: any) {
      event.target.src = "assets/images/img.jpg";
    }
  

    
 
}