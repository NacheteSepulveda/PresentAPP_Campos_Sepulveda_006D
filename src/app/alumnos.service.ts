import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { IAlumnos } from '../interfaces/alumnos';
import { HttpClient } from '@angular/common/http'
import { IAlumno } from '../interfaces/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  listarAlumnos():Observable<IAlumnos>{
    return this.http.get<IAlumnos>(`${environment.apiURL}/alumnos`)
  }
  
  crearGatito(newAlumno: IAlumno):Observable<IAlumno>{
    return this.http.post<IAlumno>(`${environment.apiURL}/alumnos`,newAlumno)
  }
}

