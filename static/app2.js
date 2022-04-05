// import { Metacom } from './metacom.js';
import bootstrap from './lib/swayer/index.js';
// import './app/preload.js';
import SectionLeyoutApplication from './lib/sectionLeyoutApplication.js';
//import FormsManager from './lib/formManager/formManagerService.js'

class Application {
  constructor() {
    // const protocol = location.protocol === 'http:' ? 'ws' : 'wss';
    // this.metacom = Metacom.create(`${protocol}://${location.host}/api`);
    // this.generationID = 1;
    // //this.formsManager = new FormsManager();
    // this.i18n = 'en';
  }

  // generateID() {
  //   return this.generationID++;
  // }
}

const getLeyoutApplicaton = async () => {
  const leyoutApplicaton = new SectionLeyoutApplication('main');

  const menuSection =  new SectionLeyoutApplication(
    'menuSection',
    {
      height: '48px',
      component: 'menuPanelSection',
    });
  leyoutApplicaton.add(menuSection);
  
  const workspaceSection =  new SectionLeyoutApplication('workspaceSection', {height: 'calc(100% - 120px)'});
  leyoutApplicaton.add(workspaceSection);
  const openFormsListSection =  new SectionLeyoutApplication('openFormsListSection', {height: '48px'});
  workspaceSection.add(openFormsListSection);
  
  const footerSection =  new SectionLeyoutApplication('footerSection', {height: '48px'});
  leyoutApplicaton.add(footerSection);

  return leyoutApplicaton;
};

window.addEventListener('load', async () => {
  // window.application = new Application();
  // window.api = window.application.metacom.api;
  // //await application.metacom.load('auth', 'workbenche', 'workspace');
  // await application.metacom.load('auth');

  
  // api.workspace.on('formDataUpload', (data)=>{
  //   application.formsManager.uploadFormData(data);
  // });

  // api.workspace.on('backEvent', (data)=>{
  //   application.formsManager.backEvent(data);
  // });

  // const token = localStorage.getItem('metarhia.session.token');
  // let logged = false;
  // if (token) {
  //   const res = await api.auth.restore({ token });
  //   logged = res.status === 'logged';
  // }
  // if (!logged) {
  //   const res = await api.auth.signin({ login: 'marcus', password: 'marcus' });
  //   if (res.token) {
  //     localStorage.setItem('metarhia.session.token', res.token);
  //     logged = true;
  //   }
  // }

  // router
  // console.log(location);
  // const pathname = window.location.pathname;

  window.leyoutApplicaton = await getLeyoutApplicaton();

  // if (logged) {
  //   const res = await api.workspace.init();
  //   console.log({res});
  //   // if (res.token) {
  //   //   localStorage.setItem('metarhia.session.token', res.token);
  //   // }
  // }
  bootstrap({
    path: './app/pages/index2',
    base: import.meta.url,
  });

  // bootstrap({
  //   path: './app/pages/index',
  //   base: import.meta.url,
  // });
});

//if (navigator.serviceWorker) {
//  navigator.serviceWorker.register('/worker.js');
//}
