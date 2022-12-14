import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { AlumnosService } from '../../alumnos.service';


@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.page.html',
  styleUrls: ['./listar-alumnos.page.scss'],
})
export class ListarAlumnosPage implements OnInit {

  alumnos=[]

  constructor(private alumnosservice: AlumnosService,
              private loadCtrl: LoadingController) { }

  ngOnInit() {
    this.loadAlumnos();
  }

  async loadAlumnos (event?: InfiniteScrollCustomEvent){
    const loading = await this.loadCtrl.create({
      message: "Calmao nomas...",
      spinner: "bubbles"
    });

    await loading.present();

    this.alumnosservice.listarAlumnos().subscribe(
      (resp)=>{
        loading.dismiss();
        console.log(resp);
        let listString = JSON.stringify(resp)
        this.alumnos = JSON.parse(listString)
        event?.target.complete();
      },
      (err)=>{
        console.log(err.message)
        loading.dismiss();
      }
    )
  }
}



