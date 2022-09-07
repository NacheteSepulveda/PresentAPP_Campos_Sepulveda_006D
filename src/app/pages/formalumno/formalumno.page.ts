import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formalumno',
  templateUrl: './formalumno.page.html',
  styleUrls: ['./formalumno.page.scss'],
})
export class FormalumnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuario={
    password:'',
    email:'',
  }


  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
