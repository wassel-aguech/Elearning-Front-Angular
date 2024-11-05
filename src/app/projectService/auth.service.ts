import { Injectable } from '@angular/core';
import { EtudiantDto } from '../projectModel/etudiant-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ProfDto } from '../projectModel/prof-dto';
import { AuthenticationRequest } from '../projectModel/authentication-request';
import { AuthenticationResponse } from '../projectModel/authentication-response';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl+ "/auth"
  //baseUrlcontprof = environment.baseUrl+ "/professeurs"
//baseUrlcontuser = environment.baseUrl+ "/profil"




  constructor(private http: HttpClient) { }

  registerStudent(student: EtudiantDto): Observable<EtudiantDto> {
    return this.http.post<EtudiantDto>(`${this.baseUrl}/registeretudiant`, student);
  }


  registerProf(prof: ProfDto): Observable<ProfDto> {
    return this.http.post<ProfDto>(`${this.baseUrl}/registerEnseignant`, prof);
  }


  login(authenticationrequest:AuthenticationRequest): Observable<AuthenticationResponse> {
   
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/authenticate`,authenticationrequest);
  }

  setUserToken (authenticationResponse: AuthenticationResponse){
    localStorage.setItem("accessToken",JSON.stringify(authenticationResponse))
  const token = authenticationResponse.accessToken;
  if (token) {
  const decodedToken = jwtDecode(token) as any;
  const fullname = decodedToken.fullname;
  localStorage.setItem("fullname", fullname);
  const userId = decodedToken.userId;
  localStorage.setItem("userId", userId);
  const role = decodedToken.role;
  localStorage.setItem("role", role);

  console.log("uuuuuuuuuuuuuuuuuuuuuuuuuu")
  console.log("HHHHHHHHH",decodedToken)
    }
    

}


}
