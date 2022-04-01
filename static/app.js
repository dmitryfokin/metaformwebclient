import { Metacom } from './metacom.js';
import bootstrap from './lib/swayer/index.js';
import './app/preload.js';
//import FormsManager from './lib/formManager/formManagerService.js'

class Application {
  constructor() {
    const protocol = location.protocol === 'http:' ? 'ws' : 'wss';
    this.metacom = Metacom.create(`${protocol}://${location.host}/api`);
    this.generationID = 1;
    //this.formsManager = new FormsManager();
    this.i18n = 'en';
  }

  // generateID() {
  //   return this.generationID++;
  // }
}

window.addEventListener('load', async () => {
  window.application = new Application();
  window.api = window.application.metacom.api;
  //await application.metacom.load('auth', 'workbenche', 'workspace');
  await application.metacom.load('auth');

  // api.workspace.on('formDataUpload', (data)=>{
  //   application.formsManager.uploadFormData(data);
  // });

  // api.workspace.on('backEvent', (data)=>{
  //   application.formsManager.backEvent(data);
  // });

  const token = localStorage.getItem('metarhia.session.token');
  let logged = false;
  if (token) {
    const res = await api.auth.restore({ token });
    logged = res.status === 'logged';
  }
  if (!logged) {
    const res = await api.auth.signin({ login: 'marcus', password: 'marcus' });
    if (res.token) {
      localStorage.setItem('metarhia.session.token', res.token);
      logged = true;
    }
  }

  // if (logged) {
  //   const res = await api.workspace.init();
  //   console.log({res});
  //   // if (res.token) {
  //   //   localStorage.setItem('metarhia.session.token', res.token);
  //   // }
  // }

  bootstrap({
    path: './app/pages/index',
    base: import.meta.url,
  });
});

//if (navigator.serviceWorker) {
//  navigator.serviceWorker.register('/worker.js');
//}
