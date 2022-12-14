import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoAlumnoGuard } from './guards/ingresado-alumno.guard'; 
import { IngresadoDocenteGuard }from './guards/ingresado-docente.guard'
import { NoIngresadoAlumnoGuard } from './guards/no-ingresado-alumno.guard'
import { NoIngresadoDocenteGuard } from './guards/no-ingresado-docente.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'selecusuario',
    pathMatch: 'full'
  },
  {
    path: 'selecusuario',
    loadChildren: () => import('./pages/selecusuario/selecusuario.module').then( m => m.SelecusuarioPageModule),
    //canActivate: [NoIngresadoAlumnoGuard, NoIngresadoDocenteGuard]
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule),
    canActivate: [IngresadoAlumnoGuard, IngresadoDocenteGuard]
  },
  {
    path: 'inputs',
    loadChildren: () => import('./pages/inputs/inputs.module').then( m => m.InputsPageModule),
    canActivate: [NoIngresadoDocenteGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [IngresadoDocenteGuard]
  },
  {
    path: 'formalumno',
    loadChildren: () => import('./pages/formalumno/formalumno.module').then( m => m.FormalumnoPageModule),
    canActivate: [NoIngresadoAlumnoGuard]
  },
  {
    path: 'codigoqr',
    loadChildren: () => import('./pages/codigoqr/codigoqr.module').then( m => m.CodigoqrPageModule),
    canActivate: [IngresadoDocenteGuard]

  },
  {
    path: 'docenteasis',
    loadChildren: () => import('./pages/docenteasis/docenteasis.module').then( m => m.DocenteasisPageModule),
    canActivate: [IngresadoDocenteGuard]
  },
  {
    path: 'inicio-alumno',
    loadChildren: () => import('./pages/inicio-alumno/inicio-alumno.module').then( m => m.InicioAlumnoPageModule),
    canActivate: [IngresadoAlumnoGuard]
  },
  {
    path: 'qrescan',
    loadChildren: () => import('./pages/qrescan/qrescan.module').then( m => m.QrescanPageModule),
    canActivate: [IngresadoAlumnoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoAlumnoGuard, NoIngresadoDocenteGuard]
  },
  {
    path: 'feriados',
    loadChildren: () => import('./pages/feriados/feriados.module').then( m => m.FeriadosPageModule),
    canActivate: [IngresadoAlumnoGuard, IngresadoDocenteGuard]
  },

  {
    path: 'listar-alumnos',
    loadChildren: () => import('./pages/listar-alumnos/listar-alumnos.module').then( m => m.ListarAlumnosPageModule),
    canActivate: [IngresadoDocenteGuard]
  },
  {
    path: 'agregar-alumno',
    loadChildren: () => import('./pages/agregar-alumno/agregar-alumno.module').then( m => m.AgregarAlumnoPageModule),
    canActivate: [IngresadoDocenteGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
