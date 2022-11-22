import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Datos{
  nombre: string;
  correo: string;
  password: string;
  modified: number;
  rol: string;
}

const ITEMS_KEY = 'my-datos';


@Injectable({
  providedIn: 'root'
})
export class ServicedatosService {

  private _storage: Storage;

  constructor(private Storage: Storage) {
    this.init();
   }

  async init(){
    const storage = await this.Storage.create();
    this._storage = storage;
  }

  async addDatos(dato: Datos):Promise<any>{
    return this.Storage.get(ITEMS_KEY).then((datos : Datos[])=>{
       if (datos) {
         datos.push(dato);
         return this.Storage.set(ITEMS_KEY, datos);
       }else {
         return this.Storage.set(ITEMS_KEY, [dato]);
       }
  
     })
  }
  async getDatos(): Promise<Datos[]>{
    return this.Storage.get(ITEMS_KEY);
  }



  }