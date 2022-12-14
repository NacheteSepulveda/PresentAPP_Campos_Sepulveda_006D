import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes: Componente[] = [ 
    {
      icon: 'document-text-outline',
      name: 'Acerca de...',
      redirecTo:'/card',
    },
    {
      icon : 'eye-outline',
      name: 'Correos de auspiciadores',
      redirecTo: '/feriados'
    }
    
  ];

}
