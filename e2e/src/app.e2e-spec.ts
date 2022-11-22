import { AppPage } from './app.po';

describe('Ejemplos de pruebas', () => {
  let page: AppPage;

  //configuración del testing 
  beforeEach(() => {
    page = new AppPage();
  });

  //testing a unidades de codigo
  it('Primera 1 Selecusuario', () => {
    page.navigateTo();
    expect(page.getSelecusuario()).toContain('No estas registrado? Registrate Aqui:');
  });

  it('Prueba 2', () => {
    page.navigateTo();
    expect( page.getRegistrousuario()).toContain('PresentAPP!');
  });

  it('Prueba 3 Inicio',  () => {
     page.navigateTo();
     expect( page.getInicio()).toContain('HOLA!, DOCENTE: ');
   });

   it('Prueba 4 Form Docente',  () => {
    page.navigateTo();
    expect( page.getselecionInputs()).toContain('Acceso Docente');
  });

  it('Prueba 5 Form Alumno',  () => {
    page.navigateTo();
    expect( page.getseleccionFormulario()).toContain('Acceso Alumno');
  });



});
