import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Alumno{
  correo: string;
  password: string;
  modified: number;
}

const ITEMS_KEY = 'my-alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoserviceService {

  private _storage: Storage;

  constructor(private Storage: Storage) {
    this.init();
   }

  async init(){
    const storage = await this.Storage.create();
    this._storage = storage;
  }

  async addAlumno(dato: Alumno):Promise<any>{
    return this.Storage.get(ITEMS_KEY).then((datos : Alumno[])=>{
       if (datos) {
         datos.push(dato);
         return this.Storage.set(ITEMS_KEY, datos);
       }else {
         return this.Storage.set(ITEMS_KEY, [dato]);
       }
  
     })
  }

  async getAlumno(): Promise<Alumno[]>{
    return this.Storage.get(ITEMS_KEY);
  }


}
