import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }




  async getSelecusuario():Promise<string> {
    return element(by.css('app-root ion-label')).getText();
  }
  
  async getRegistrousuario():Promise<string> {
    return element(by.css('app-root ion-title')).getText();
  }


  async getInicio():Promise<string> {
    return element(by.css('app-root ion-label')).getText();
  }

  async getselecionInputs():Promise<string> {
    return element(by.css('app-root ion-card-title')).getText();
  }


  async getseleccionFormulario():Promise<string> {
    return element(by.css('app-root ion-card-title')).getText();
  }



}