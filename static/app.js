import { Metacom } from './metacom.js';
import bootstrap from './lib/swayer/index.js';
// import './app/preload.js';
import SectionLeyoutApplication from './lib/sectionLeyoutApplication.js';
//import FormsManager from './lib/formManager/formManagerService.js'

class Application {
  constructor() {
    const protocol = location.protocol === 'http:' ? 'ws' : 'wss';
    this.metacom = Metacom.create(`${protocol}://${location.host}/api`);
    this.sessionData = {};
    this.generationID = 1;
    //this.formsManager = new FormsManager();
    this.i18n = 'en';
  }

  // generateID() {
  //   return this.generationID++;
  // }
}

const getLeyoutApplicaton = async () => {
  const leyoutApplicaton = new SectionLeyoutApplication('main');

  const menuSection = new SectionLeyoutApplication(
    'menuSection',
    {
      height: '48px',
      component: 'menuPanelSection',
    });
  leyoutApplicaton.add(menuSection);

  const workspaceSection = new SectionLeyoutApplication('workspaceSection', { height: 'calc(100% - 120px)' });
  leyoutApplicaton.add(workspaceSection);
  const desktopSection = new SectionLeyoutApplication('desktopSection', { height: 'calc(100% - 62px)' });
  workspaceSection.add(desktopSection);
  const openFormsListSection = new SectionLeyoutApplication('openFormsListSection', { height: '48px' });
  workspaceSection.add(openFormsListSection);

  const footerSection = new SectionLeyoutApplication('footerSection', { height: '48px' });
  leyoutApplicaton.add(footerSection);

  return leyoutApplicaton;
};

window.addEventListener('load', async () => {
  window.application = new Application();
  window.api = window.application.metacom.api;
  await application.metacom.load('metaform');



  // api.workspace.on('formDataUpload', (data)=>{
  //   application.formsManager.uploadFormData(data);
  // });

  // api.workspace.on('backEvent', (data)=>{
  //   application.formsManager.backEvent(data);
  // });

  //application.sessionData.token = localStorage.getItem('metarhia.session.token');
  const res = await api.metaform.processorData({
    action: {
      name: 'systemActions/getToken',
    },
  });

  // await api.metaform.processorData({action:{name: 'systemActions/initDBStructure'}, target: 'enterprise',});
  // await api.metaform.processorData({action:{name: 'systemActions/dropDBStructure'}, target: 'enterprise',});

  console.dir(res.token);

  if (res.token) localStorage.setItem('metarhia.userSession.token', res.token);
  
  application.sessionData = await api.metaform.processorData({
    action: {
      name: 'systemActions/clearUserSessionData',
      data: { token: res.token },
    },
  });

  console.dir(application.sessionData);


  // application.sessionData = await api.metaform.processorData({
  //   action: {
  //     name: 'systemActions/getUserSessionData',
  //     data: { token },
  //   },
  // });

  //let logged = false;
  // if (token) {
  //   const res = await api.auth.restore({ token });
  //   logged = res.status === 'logged';
  // }
  // if (!logged) {
  // const res = await api.auth.signin({ login: 'marcus', password: 'marcus' });
  // if (res.token) {
  //   localStorage.setItem('metarhia.session.token', res.token);
  //   logged = true;
  // }


  // router
  console.log('location', location);
  const pathname = window.location.pathname;
  console.log('pathname', pathname);



  //application.sessionData.leyoutApplicaton = await getLeyoutApplicaton();

  // if (logged) {
  //   const res = await api.workspace.init();
  //   console.log({res});
  //   // if (res.token) {
  //   //   localStorage.setItem('metarhia.session.token', res.token);
  //   // }
  // }

  bootstrap({
    path: './app/layout/index.js',
    base: import.meta.url,
  });
});

//if (navigator.serviceWorker) {
//  navigator.serviceWorker.register('/worker.js');
//}
